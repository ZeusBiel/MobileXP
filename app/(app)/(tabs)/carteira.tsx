import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Dimensions } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import BotaoPrincipal from '@/components/BotaoPrincipal';

export default function CarteiraScreen() {
  const screenWidth = Dimensions.get('window').width;

  const data = {
    labels: ['Nov 23', '24', '25', '26', '27', '28', '29', '30'],
    datasets: [
      {
        data: [20, 25, 30, 35, 40, 42, 48, 52],
        color: (opacity = 1) => `rgba(88, 166, 255, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundGradientFrom: '#0d1117',
    backgroundGradientTo: '#0d1117',
    color: (opacity = 1) => `rgba(139, 148, 158, ${opacity})`,
    strokeWidth: 2,
    useShadows: false,
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.headerTitle}>SUA CARTEIRA</Text>
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Seus investimentos</Text>
          <LineChart
            data={data}
            width={screenWidth - 48}
            height={220}
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
            withInnerLines={false}
            withOuterLines={false}
          />
        </View>
        <BotaoPrincipal titulo="SEUS ATIVOS" rota="/seus-ativos" />
        <BotaoPrincipal titulo="RECOMENDAÇÕES" rota="/recomendacoes" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#0d1117' },
  container: { flex: 1, alignItems: 'center', justifyContent: 'flex-start', paddingTop: 60 },
  headerTitle: { color: '#c9d1d9', fontSize: 14, marginBottom: 20 },
  chartContainer: {
    borderWidth: 1,
    borderColor: '#30363d',
    borderRadius: 8,
    padding: 16,
    marginBottom: 40,
  },
  chartTitle: { color: '#c9d1d9', fontSize: 16, marginBottom: 10 },
  chart: { borderRadius: 8 },
});