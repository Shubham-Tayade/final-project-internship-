import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Platform,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import MetricCard from '../components/MetricCard';
import ChartsSection from '../components/ChartsSection';
import FieldReportsTable from '../components/FieldReportsTable';
import AIInsightsPanel from '../components/AIInsightsPanel';

const { width, height } = Dimensions.get('window');

export default function DashboardScreen() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <ScrollView 
        style={styles.container} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
      >
        {/* Header with Gradient */}
        <LinearGradient
          colors={['#2c6e49', '#4c956c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.header}
        >
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Dashboard Home</Text>
            <Text style={styles.headerSubtitle}>MoEFCC</Text>
          </View>
        </LinearGradient>

        {/* Welcome Card */}
        <View style={styles.welcomeCard}>
          <LinearGradient
            colors={['#2c6e49', '#4c956c']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.welcomeGradient}
          >
            <Text style={styles.welcomeTitle}>Welcome, Ranger!</Text>
            <Text style={styles.welcomeDate}>{currentDate}</Text>
          </LinearGradient>
        </View>

        {/* Metrics Cards */}
        <View style={styles.metricsContainer}>
          <MetricCard
            title="Active Patrols Today"
            value="1,482"
            change="+5.2% vs yesterday"
            positive={true}
          />
          <MetricCard
            title="Wildlife Sightings"
            value="312"
            change="+2.1% vs last week"
            positive={true}
          />
          <MetricCard
            title="Fire Alerts"
            value="19"
            change="-1.5% vs yesterday"
            positive={false}
          />
          <MetricCard
            title="Afforestation Projects"
            value="8,940 Ha"
            change="+112 Ha this month"
            positive={true}
          />
        </View>

        {/* Charts Section */}
        <ChartsSection />

        {/* Field Reports */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Latest Field Reports</Text>
          </View>
          <FieldReportsTable />
          <TouchableOpacity style={styles.viewAllButton} activeOpacity={0.8}>
            <Text style={styles.viewAllText}>View All Reports</Text>
          </TouchableOpacity>
        </View>

        {/* AI Insights Panel */}
        <AIInsightsPanel />

        {/* Footer */}
        <LinearGradient
          colors={['#2c6e49', '#4c956c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.footer}
        >
          <Text style={styles.footerText}>
            ONE NATION. ONE PLATFORM. — Unified Forest & Wildlife Data by PugArch Technology Pvt. Ltd.
          </Text>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f4f7f6',
  },
  container: {
    flex: 1,
    backgroundColor: '#f4f7f6',
  },
  contentContainer: {
    paddingBottom: 20,
  },
  header: {
    paddingTop: Platform.OS === 'ios' ? 10 : 20,
    paddingBottom: 20,
    paddingHorizontal: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  },
  headerContent: {
    marginTop: Platform.OS === 'ios' ? 10 : 0,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
    letterSpacing: 0.5,
  },
  headerSubtitle: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '600',
  },
  welcomeCard: {
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 15,
    borderRadius: 20,
    overflow: 'hidden',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 6 },
        shadowOpacity: 0.15,
        shadowRadius: 12,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  welcomeGradient: {
    padding: 20,
  },
  welcomeTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#fff',
    marginBottom: 5,
  },
  welcomeDate: {
    fontSize: 14,
    color: 'rgba(255, 255, 255, 0.9)',
    fontWeight: '400',
  },
  metricsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'space-between',
  },
  section: {
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
  sectionHeader: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1a535c',
    letterSpacing: 0.3,
  },
  viewAllButton: {
    marginTop: 15,
    padding: 14,
    backgroundColor: '#2c6e49',
    borderRadius: 12,
    alignItems: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#2c6e49',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  viewAllText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 15,
    letterSpacing: 0.5,
  },
  footer: {
    padding: 20,
    marginTop: 20,
    marginHorizontal: 15,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  footerText: {
    color: '#fff',
    fontSize: 11,
    textAlign: 'center',
    lineHeight: 18,
    fontWeight: '500',
    letterSpacing: 0.3,
  },
});

