import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, Platform, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart, BarChart, PieChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');
const chartWidth = width - 60;

export default function ChartsSection() {
  // Sample data for charts
  const incidentsData = {
    labels: ['UP', 'MP', 'MH', 'RJ', 'AS', 'UK'],
    datasets: [
      {
        data: [45, 38, 32, 28, 25, 22],
        color: (opacity = 1) => `rgba(44, 110, 73, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const conflictTypesData = [
    {
      name: 'Crop Damage',
      population: 35,
      color: '#2c6e49',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Livestock',
      population: 28,
      color: '#4c956c',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Human Injury',
      population: 20,
      color: '#6bb77b',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
    {
      name: 'Property',
      population: 17,
      color: '#a8d5a3',
      legendFontColor: '#333',
      legendFontSize: 12,
    },
  ];

  const patrolTrendData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        data: [1200, 1350, 1420, 1482],
        color: (opacity = 1) => `rgba(44, 110, 73, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#fff',
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(44, 110, 73, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#2c6e49',
    },
    barPercentage: 0.7,
  };

  const [activeChart, setActiveChart] = useState(null);

  return (
    <View>
      {/* Incidents Chart */}
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => setActiveChart('incidents')}
        style={[styles.chartContainer, activeChart === 'incidents' && styles.activeChart]}
      >
        <Text style={styles.chartTitle}>Incidents Reported vs Resolved (State-wise)</Text>
        <View style={styles.chartWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <BarChart
              data={incidentsData}
              width={Math.max(chartWidth, 300)}
              height={220}
              yAxisLabel=""
              chartConfig={chartConfig}
              verticalLabelRotation={0}
              fromZero
              showValuesOnTopOfBars
              style={styles.chart}
            />
          </ScrollView>
        </View>
      </TouchableOpacity>

      {/* Wildlife Conflict Types */}
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => setActiveChart('conflict')}
        style={[styles.chartContainer, activeChart === 'conflict' && styles.activeChart]}
      >
        <Text style={styles.chartTitle}>Wildlife Conflict Types</Text>
        <View style={styles.chartWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <PieChart
              data={conflictTypesData}
              width={Math.max(chartWidth, 300)}
              height={220}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              style={styles.chart}
            />
          </ScrollView>
        </View>
      </TouchableOpacity>

      {/* Patrol Activity Trends */}
      <TouchableOpacity 
        activeOpacity={0.9}
        onPress={() => setActiveChart('patrol')}
        style={[styles.chartContainer, activeChart === 'patrol' && styles.activeChart]}
      >
        <Text style={styles.chartTitle}>Patrol Activity Trends (Last 30 Days)</Text>
        <View style={styles.chartWrapper}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
            <LineChart
              data={patrolTrendData}
              width={Math.max(chartWidth, 300)}
              height={220}
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
            />
          </ScrollView>
        </View>
      </TouchableOpacity>

      {/* Alerts Heatmap Placeholder */}
      <View style={styles.chartContainer}>
        <Text style={styles.chartTitle}>Alerts Heatmap (GIS Placeholder)</Text>
        <View style={styles.heatmapPlaceholder}>
          <Text style={styles.placeholderText}>GIS Map View</Text>
          <Text style={styles.placeholderSubtext}>Interactive heatmap visualization</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  chartContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 18,
    borderRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.08,
        shadowRadius: 12,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  chartTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a535c',
    marginBottom: 15,
    letterSpacing: 0.3,
  },
  activeChart: {
    borderWidth: 2,
    borderColor: '#2c6e49',
    transform: [{ scale: 0.98 }],
  },
  chartWrapper: {
    overflow: 'hidden',
    borderRadius: 16,
  },
  scrollContent: {
    paddingRight: 18,
  },
  chart: {
    borderRadius: 16,
  },
  heatmapPlaceholder: {
    height: 220,
    backgroundColor: '#e8f5e9',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#a8d5a3',
    borderStyle: 'dashed',
  },
  placeholderText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2c6e49',
    marginBottom: 5,
  },
  placeholderSubtext: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
});

