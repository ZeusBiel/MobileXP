import { Stack } from 'expo-router';
import React from 'react';

export default function TabsStackLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="carteira" />
      <Stack.Screen name="perfil" />
      <Stack.Screen name="seus-ativos" />
      <Stack.Screen name="recomendacoes" />
      <Stack.Screen name="detalhes-perfil" />
      <Stack.Screen name="quiz-perfil" />
    </Stack>
  );
}