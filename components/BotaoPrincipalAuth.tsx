import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ActivityIndicator } from 'react-native';

interface BotaoPrincipalAuthProps {
  onPress: () => void;
  isLoading?: boolean;
}

const BotaoPrincipalAuth: React.FC<BotaoPrincipalAuthProps> = ({ onPress, isLoading = false }) => {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator color="#c9d1d9" />
      ) : (
        <Text style={styles.texto}>Continue</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#21262d',
    width: '100%',
    padding: 14,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#30363d',
    height: 52, // Altura fixa para não mudar durante o loading
  },
  texto: {
    color: '#c9d1d9',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BotaoPrincipalAuth;