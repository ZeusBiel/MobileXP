import React from 'react';
import { Redirect, Tabs } from 'expo-router';
import CustomTabBar from '@/components/CustomTabBar';
import { useAuth } from '@/context/AuthContext';
import { ActivityIndicator, View } from 'react-native';

export default function AppLayout() {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!user) {
    return <Redirect href="/login" />;
  }

  return (
    <Tabs
      screenOptions={{ headerShown: false }}
      tabBar={props => <CustomTabBar {...props} />}
    >
      <Tabs.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}