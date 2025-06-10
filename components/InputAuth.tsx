import React from 'react';
import { TextInput, StyleSheet, View } from 'react-native';

interface InputAuthProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
}

const InputAuth: React.FC<InputAuthProps> = ({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#8b949e"
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  input: {
    backgroundColor: '#010409',
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 6,
    paddingVertical: 12,
    paddingHorizontal: 16,
    color: '#c9d1d9',
    fontSize: 16,
  },
});

export default InputAuth;