import React from 'react';
import { Text, StyleSheet, SafeAreaView, ScrollView, View } from 'react-native';
import RecomendacaoCard from '@/components/RecomendacaoCard';

const RECOMENDACOES_DATA = [
  {
    id: '1',
    titulo: 'Tesouro Direto (Tesouro Selic)',
    detalhes: [
      'O que é: Título público que acompanha a Taxa Selic.',
      'Vantagens: Liquidez diária, risco muito baixo, ideal para reserva de emergência.',
      'Risco: Baixíssimo, garantido pelo Governo Federal.',
    ],
  },
  {
    id: '2',
    titulo: 'CDB (Certificado de Depósito Bancário) com 100% do CDI',
    detalhes: [
      'O que é: Empréstimo feito a um banco, que devolve o dinheiro com juros.',
      'Vantagens: Também seguro (Fundo Garantidor de Créditos) até R$ 250 mil.',
      'Risco: Baixo, principalmente em bancos grandes.',
    ],
  },
  {
    id: '3',
    titulo: 'Fundos DI',
    detalhes: [
      'O que é: Fundos de investimento que aplicam em títulos de renda fixa atrelados à Selic ou ao CDI.',
      'Vantagens: Boa liquidez, gestão profissional, risco baixo.',
      'Risco: Muito baixo, mas com taxas que podem reduzir o rendimento.',
    ],
  },
];

export default function RecomendacoesScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerTitle}>Recomendações de investimento</Text>
        <Text style={styles.subHeaderTitle}>Para um perfil conservador</Text>
        
        {RECOMENDACOES_DATA.map((item, index) => (
          <RecomendacaoCard
            key={item.id}
            numero={index + 1}
            titulo={item.titulo}
            detalhes={item.detalhes}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  container: {
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 40,
  },
  headerTitle: {
    color: '#c9d1d9',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 8,
  },
  subHeaderTitle: {
    color: '#8b949e',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 40,
  },
});