import React from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import BotaoPrincipal from '@/components/BotaoPrincipal';

export default function PerfilScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>SEU PERFIL</Text>
        <View style={styles.content}>
          <BotaoPrincipal titulo="DETALHES DOS PERFIL" rota="/detalhes-perfil" />
          <BotaoPrincipal titulo="QUIZ DE PERFIL" rota="/quiz-perfil" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  headerTitle: { color: '#c9d1d9', fontSize: 14, position: 'absolute', top: 60 },
  content: { width: '100%', alignItems: 'center' },
});