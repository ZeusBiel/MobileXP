import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Separator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.line} />
      <Text style={styles.text}>or</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#30363d',
  },
  text: {
    marginHorizontal: 10,
    color: '#8b949e',
    fontSize: 14,
  },
});

export default Separator;