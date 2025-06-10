import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Ativo {
  nome: string;
  ticker: string;
  preco: number;
  variacao: number;
  quantidade: number;
  valorAplicado: number;
  rendimento: number;
}

interface AtivoCardProps {
  ativo: Ativo;
}

const AtivoCard: React.FC<AtivoCardProps> = ({ ativo }) => {
  const formatCurrency = (value: number) => {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  };

  const variacaoStyle = ativo.variacao >= 0 ? styles.positive : styles.negative;
  const variacaoSign = ativo.variacao >= 0 ? '+' : '';

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Text style={styles.nome}>{ativo.nome} ({ativo.ticker})</Text>
        <Text style={styles.preco}>{formatCurrency(ativo.preco)}</Text>
      </View>
      <Text style={[styles.variacao, variacaoStyle]}>
        {variacaoSign}{ativo.variacao.toFixed(2)}%
      </Text>
      <View style={styles.separator} />
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Quantidade de ações:</Text>
          <Text style={styles.detailValue}>{ativo.quantidade}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.detailLabel}>Valor aplicado:</Text>
          <Text style={styles.detailValue}>{formatCurrency(ativo.valorAplicado)}</Text>
        </View>
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.detailLabel}>Rendimento:</Text>
        <Text style={[styles.detailValue, variacaoStyle]}>{formatCurrency(ativo.rendimento)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#161b22',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#30363d',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  nome: {
    color: '#c9d1d9',
    fontSize: 18,
    fontWeight: 'bold',
  },
  preco: {
    color: '#c9d1d9',
    fontSize: 16,
  },
  variacao: {
    fontSize: 14,
    fontWeight: 'bold',
    alignSelf: 'flex-start',
  },
  positive: {
    color: '#3FB950',
  },
  negative: {
    color: '#f85149',
  },
  separator: {
    height: 1,
    backgroundColor: '#30363d',
    marginVertical: 12,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  detailItem: {},
  detailLabel: {
    color: '#8b949e',
    fontSize: 12,
  },
  detailValue: {
    color: '#c9d1d9',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default AtivoCard;