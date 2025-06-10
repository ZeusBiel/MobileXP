import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter, useSegments } from 'expo-router';
import { BottomTabBarProps } from '@react-navigation/bottom-tabs';

const CustomTabBar = ({ navigation }: BottomTabBarProps) => {
  const router = useRouter();
  const segments = useSegments();

  const isAtStackRoot = segments.length <= 2;

  const handleGoBack = () => {
    router.back();
  };

  const handleGoHome = () => {
    navigation.navigate('(tabs)', { screen: 'index' });
  };

  if (isAtStackRoot) {
    return null;
  }

  return (
    <View style={styles.standardBarContainer}>
      <TouchableOpacity onPress={handleGoBack} style={styles.button}>
        <Ionicons name="arrow-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoHome} style={styles.button}>
        <Ionicons name="home" size={28} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  standardBarContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#3A5F7F',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingBottom: 10,
    borderTopWidth: 1,
    borderTopColor: '#4A6F8F',
  },
  button: {
    padding: 10,
  },
});

export default CustomTabBar;