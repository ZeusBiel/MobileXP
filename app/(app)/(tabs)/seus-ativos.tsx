import React from 'react';
import { Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import AtivoCard from '../../../components/AtivoCard';

const MOCK_ATIVOS = [
  { id: '1', nome: 'XP Investimentos', ticker: 'XPBR31', preco: 105.42, variacao: -0.12, quantidade: 40, valorAplicado: 8888.16, rendimento: 843.38 },
  { id: '2', nome: 'Petrobras', ticker: 'PETR4', preco: 31.75, variacao: 0.13, quantidade: 30, valorAplicado: 3842.51, rendimento: 197.52 },
  { id: '3', nome: 'Apple', ticker: 'AAPL34', preco: 57.10, variacao: -0.71, quantidade: 45, valorAplicado: 4878.41, rendimento: 132.54 },
];

export default function SeusAtivosScreen() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={MOCK_ATIVOS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AtivoCard ativo={item} />}
        style={styles.list}
        ListHeaderComponent={<Text style={styles.title}>Seus Ativos:</Text>}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  list: {
    paddingHorizontal: 16,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 60,
    marginBottom: 20,
  },
});