import { useEffect } from 'react';
import { GoogleAuthProvider, signInWithCredential } from 'firebase/auth';
import { useAuthRequest } from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import { auth } from '../firebaseConfig';

WebBrowser.maybeCompleteAuthSession();

export const useGoogleAuth = () => {
  const [request, response, promptAsync] = useAuthRequest({
    webClientId: 'SUA_WEB_CLIENT_ID.apps.googleusercontent.com',
  });

  useEffect(() => {
    if (request) {
      console.log('--- URI DE REDIRECIONAMENTO DO EXPO:', request.redirectUri);
    }
  }, [request]);

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return {
    isLoading: !request,
    promptAsync,
  };
};