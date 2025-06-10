import React, { createContext, useContext, useState, ReactNode, useEffect, useCallback } from 'react';
import { onAuthStateChanged, User, signOut } from 'firebase/auth';
import { auth, db } from '../firebaseConfig';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ActivityIndicator, View } from 'react-native';

interface UserProfile {
  nome: string;
  capitalTotal: number;
  perfilInvestidor: string;
}

interface AuthContextData {
  user: User | null;
  userProfile: UserProfile | null;
  isLoading: boolean;
  login: (user: User) => Promise<void>;
  logout: () => Promise<void>;
  refreshUserProfile: () => Promise<void>;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchUserProfile = useCallback(async (firebaseUser: User) => {
    if (!firebaseUser) return;
    const userDocRef = doc(db, 'users', firebaseUser.uid);
    const userDoc = await getDoc(userDocRef);

    if (userDoc.exists()) {
      setUserProfile(userDoc.data() as UserProfile);
    } else {
      const defaultProfile: UserProfile = {
        nome: firebaseUser.displayName || 'Usuário',
        capitalTotal: 47000.00,
        perfilInvestidor: 'Não definido',
      };
      await setDoc(userDocRef, defaultProfile);
      setUserProfile(defaultProfile);
    }
  }, []);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await fetchUserProfile(currentUser);
      } else {
        setUserProfile(null);
      }
      setIsLoading(false);
    });
    return () => unsubscribe();
  }, [fetchUserProfile]);

  const login = async (loggedInUser: User) => {
    setUser(loggedInUser);
    await fetchUserProfile(loggedInUser);
  };

  const logout = async () => {
    await signOut(auth);
    setUser(null);
    setUserProfile(null);
  };

  const refreshUserProfile = useCallback(async () => {
    if (user) {
      await fetchUserProfile(user);
    }
  }, [user, fetchUserProfile]);

  const value = { user, userProfile, isLoading, login, logout, refreshUserProfile };

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}