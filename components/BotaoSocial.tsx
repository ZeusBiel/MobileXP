import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image, ActivityIndicator } from 'react-native';
import { useGoogleAuth } from '../hooks/useGoogleAuth';

const BotaoSocial: React.FC = () => {
  const { isLoading, promptAsync } = useGoogleAuth();

  return (
    <TouchableOpacity
      style={styles.botao}
      disabled={isLoading}
      onPress={() => promptAsync()}
    >
      {isLoading ? (
        <ActivityIndicator color="#24292e" />
      ) : (
        <>
          <Image
            source={require('../assets/images/google-logo.png')}
            style={styles.icon}
          />
          <Text style={styles.texto}>Continue with Google</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  botao: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f0f6fc',
    borderWidth: 1,
    borderColor: 'rgba(27, 31, 35, 0.15)',
    width: '100%',
    padding: 14,
    borderRadius: 6,
    height: 52,
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  texto: {
    color: '#24292e',
    fontSize: 16,
    fontWeight: '500',
  },
});

export default BotaoSocial;