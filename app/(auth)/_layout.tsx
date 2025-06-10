import { useAuth } from '@/context/AuthContext';
import { Redirect, Stack } from 'expo-router';
import React from 'react';

export default function AuthLayout() {
  const { user } = useAuth();

  if (user) {
    return <Redirect href="/" />;
  }

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="login" />
      <Stack.Screen name="cadastro" />
    </Stack>
  );
}