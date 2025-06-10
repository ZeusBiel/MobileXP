import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import BotaoPrincipal from '@/components/BotaoPrincipal';
import { useAuth } from '@/context/AuthContext';

export default function HomeScreen() {
  const { logout } = useAuth();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.titulo}>HOME</Text>
        <BotaoPrincipal titulo="SUA CARTEIRA" rota="/carteira" />
        <BotaoPrincipal titulo="SEU PERFIL" rota="/perfil" />
      </View>

      <TouchableOpacity onPress={logout} style={styles.logoutButton}>
        <Text style={styles.logoutButtonText}>Logout</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0d1117',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 14,
    position: 'absolute',
    top: 60,
    alignSelf: 'center',
  },
  logoutButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    padding: 10,
  },
  logoutButtonText: {
    color: '#f85149',
    fontSize: 16,
    fontWeight: 'bold',
  },
});