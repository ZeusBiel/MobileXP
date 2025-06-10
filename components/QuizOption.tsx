import React from 'react';
import { Text, TouchableOpacity, StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface QuizOptionProps {
  text: string;
  isSelected: boolean;
  onPress: () => void;
}

const QuizOption: React.FC<QuizOptionProps> = ({ text, isSelected, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
        {isSelected && <Ionicons name="checkmark" size={16} color="#0d1117" />}
      </View>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#8b949e',
    marginRight: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxSelected: {
    backgroundColor: '#c9d1d9',
    borderColor: '#c9d1d9',
  },
  text: {
    color: '#8b949e',
    fontSize: 16,
    flex: 1, 
  },
});

export default QuizOption;