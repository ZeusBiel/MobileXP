import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import { useAuth } from '@/context/AuthContext';

export default function DetalhesPerfilScreen() {
  const { userProfile } = useAuth();

  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  if (!userProfile) {
    return (
      <SafeAreaView style={styles.safeArea}>
        <Text style={styles.title}>Carregando perfil...</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Detalhes do Perfil</Text>
        <View style={styles.card}>
          <Text style={styles.label}>NOME:</Text>
          <Text style={styles.value}>{userProfile.nome}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>CAPITAL TOTAL:</Text>
          <Text style={styles.value}>{formatCurrency(userProfile.capitalTotal)}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.label}>SEU PERFIL DE INVESTIDOR:</Text>
          <Text style={styles.value}>{userProfile.perfilInvestidor}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
  },
  card: {
    backgroundColor: '#3A5F7F',
    borderRadius: 15,
    padding: 20,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  label: {
    color: '#c9d1d9',
    fontSize: 14,
    marginBottom: 8,
  },
  value: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});