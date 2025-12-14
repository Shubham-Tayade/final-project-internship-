import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import { BarChart, PieChart, LineChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');
const chartWidth = width - 60;

export default function ChartsDetailScreen({ route, navigation }) {
  const { chartType } = route.params || { chartType: 'incidents' };
  const [activeChart, setActiveChart] = useState(chartType);

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
    { name: 'Crop Damage', population: 35, color: '#2c6e49', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Livestock', population: 28, color: '#4c956c', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Human Injury', population: 20, color: '#6bb77b', legendFontColor: '#333', legendFontSize: 12 },
    { name: 'Property', population: 17, color: '#a8d5a3', legendFontColor: '#333', legendFontSize: 12 },
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
    style: { borderRadius: 16 },
    propsForDots: { r: '6', strokeWidth: '2', stroke: '#2c6e49' },
    barPercentage: 0.7,
  };

  const renderChart = () => {
    switch (activeChart) {
      case 'incidents':
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <BarChart
              data={incidentsData}
              width={Math.max(chartWidth, 400)}
              height={300}
              yAxisLabel=""
              chartConfig={chartConfig}
              verticalLabelRotation={0}
              fromZero
              showValuesOnTopOfBars
              style={styles.chart}
            />
          </ScrollView>
        );
      case 'conflict':
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <PieChart
              data={conflictTypesData}
              width={Math.max(chartWidth, 400)}
              height={300}
              chartConfig={chartConfig}
              accessor="population"
              backgroundColor="transparent"
              paddingLeft="15"
              style={styles.chart}
            />
          </ScrollView>
        );
      case 'patrol':
        return (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <LineChart
              data={patrolTrendData}
              width={Math.max(chartWidth, 400)}
              height={300}
              chartConfig={chartConfig}
              bezier
              style={styles.chart}
            />
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <LinearGradient
        colors={['#2c6e49', '#4c956c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.header}
      >
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Text style={styles.backButtonText}>← Back</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Chart Details</Text>
      </LinearGradient>

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeChart === 'incidents' && styles.activeTab]}
          onPress={() => setActiveChart('incidents')}
        >
          <Text style={[styles.tabText, activeChart === 'incidents' && styles.activeTabText]}>
            Incidents
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeChart === 'conflict' && styles.activeTab]}
          onPress={() => setActiveChart('conflict')}
        >
          <Text style={[styles.tabText, activeChart === 'conflict' && styles.activeTabText]}>
            Conflict
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeChart === 'patrol' && styles.activeTab]}
          onPress={() => setActiveChart('patrol')}
        >
          <Text style={[styles.tabText, activeChart === 'patrol' && styles.activeTabText]}>
            Patrol
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.chartContainer}>
          {renderChart()}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7f6',
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 10 : 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    marginBottom: 10,
  },
  backButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    letterSpacing: 0.5,
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 12,
    padding: 5,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: '#2c6e49',
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
  },
  activeTabText: {
    color: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f7f6',
  },
  chartContainer: {
    backgroundColor: '#fff',
    margin: 15,
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
  chart: {
    borderRadius: 16,
  },
});

