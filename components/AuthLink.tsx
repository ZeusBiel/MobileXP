import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

interface AuthLinkProps {
  onPress: () => void;
  textoNormal: string;
  textoLink: string;
}

const AuthLink: React.FC<AuthLinkProps> = ({ onPress, textoNormal, textoLink }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.texto}>
        {textoNormal} <Text style={styles.link}>{textoLink}</Text>
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  texto: {
    color: '#A0A0A0',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 20,
  },
  link: {
    color: '#3A5F7F',
    fontWeight: 'bold',
  },
});

export default AuthLink;