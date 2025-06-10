import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface RecomendacaoCardProps {
  numero: number;
  titulo: string;
  detalhes: string[];
}

const RecomendacaoCard: React.FC<RecomendacaoCardProps> = ({ numero, titulo, detalhes }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.titulo}>{numero}. {titulo}</Text>
      {detalhes.map((detalhe, index) => (
        <Text key={index} style={styles.detalhe}>• {detalhe}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 24,
  },
  titulo: {
    color: '#c9d1d9',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  detalhe: {
    color: '#8b949e',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 8,
    marginLeft: 8,
  },
});

export default RecomendacaoCard;