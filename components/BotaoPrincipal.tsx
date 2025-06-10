import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter, Href } from 'expo-router';

interface BotaoPrincipalProps {
  titulo: string;
  rota: Href;
}

const BotaoPrincipal: React.FC<BotaoPrincipalProps> = ({ titulo, rota }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={styles.botao}
      onPress={() => router.push(rota)}
    >
      <Text style={styles.textoBotao}>{titulo}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#3A5F7F',
    paddingVertical: 18,
    paddingHorizontal: 32,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
    marginVertical: 10,
  },
  textoBotao: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default BotaoPrincipal;