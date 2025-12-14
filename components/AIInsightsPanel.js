import React from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';

const hotspots = [
  { name: 'Kaziranga (Zone C)', risk: 82 },
  { name: 'Corbett (Buffer)', risk: 75 },
  { name: 'Ranthambore (Zone 3)', risk: 68 },
  { name: 'Panna (Core)', risk: 61 },
  { name: 'Tadoba (Moharli)', risk: 55 },
];

export default function AIInsightsPanel() {
  const getRiskColor = (risk) => {
    if (risk >= 75) return '#f44336';
    if (risk >= 60) return '#ff9800';
    return '#ffc107';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>AI Insights Panel</Text>

      {/* Poaching Hotspots */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Top 5 Poaching Hotspots (Predicted)</Text>
        {hotspots.map((hotspot, index) => (
          <View key={index} style={styles.hotspotItem}>
            <View style={styles.hotspotNumber}>
              <Text style={styles.hotspotNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.hotspotContent}>
              <Text style={styles.hotspotName}>{hotspot.name}</Text>
              <View style={styles.riskBarContainer}>
                <View
                  style={[
                    styles.riskBar,
                    {
                      width: `${hotspot.risk}%`,
                      backgroundColor: getRiskColor(hotspot.risk),
                    },
                  ]}
                />
              </View>
            </View>
            <Text style={[styles.riskText, { color: getRiskColor(hotspot.risk) }]}>
              {hotspot.risk}% Risk
            </Text>
          </View>
        ))}
      </View>

      {/* Carbon Credit Forecast */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Carbon Credit Forecast</Text>
        <View style={styles.forecastCard}>
          <Text style={styles.forecastValue}>+1.2k tons CO₂e</Text>
          <Text style={styles.forecastLabel}>potential next quarter</Text>
        </View>
      </View>

      {/* Upcoming Patrol Alerts */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Upcoming Patrol Alerts</Text>
        <View style={styles.alertItem}>
          <View style={styles.alertDot} />
          <Text style={styles.alertText}>
            <Text style={styles.alertLocation}>Div-B (Corbett):</Text> High-risk window in 48h.
          </Text>
        </View>
        <View style={styles.alertItem}>
          <View style={styles.alertDot} />
          <Text style={styles.alertText}>
            <Text style={styles.alertLocation}>Zone C (Kaziranga):</Text> Patrol gap detected.
          </Text>
        </View>
        <View style={styles.alertItem}>
          <View style={[styles.alertDot, { backgroundColor: '#ff9800' }]} />
          <Text style={styles.alertText}>
            <Text style={styles.alertLocation}>Buffer (Kanha):</Text> IoT Sensor #S-204 low battery.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginVertical: 10,
    padding: 20,
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
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#1a535c',
    marginBottom: 20,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  section: {
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#1a535c',
    marginBottom: 15,
    letterSpacing: 0.3,
  },
  hotspotItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 14,
    padding: 14,
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  hotspotNumber: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2c6e49',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  hotspotNumberText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 14,
  },
  hotspotContent: {
    flex: 1,
    marginRight: 10,
  },
  hotspotName: {
    fontSize: 13,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  riskBarContainer: {
    height: 6,
    backgroundColor: '#e0e0e0',
    borderRadius: 3,
    overflow: 'hidden',
  },
  riskBar: {
    height: '100%',
    borderRadius: 3,
  },
  riskText: {
    fontSize: 12,
    fontWeight: 'bold',
    minWidth: 70,
    textAlign: 'right',
  },
  forecastCard: {
    backgroundColor: '#e8f5e9',
    padding: 18,
    borderRadius: 14,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#c8e6c9',
  },
  forecastValue: {
    fontSize: 26,
    fontWeight: '700',
    color: '#2c6e49',
    marginBottom: 6,
    letterSpacing: 0.5,
  },
  forecastLabel: {
    fontSize: 12,
    color: '#666',
    fontWeight: '500',
  },
  alertItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    padding: 14,
    backgroundColor: '#fff3e0',
    borderRadius: 12,
    borderLeftWidth: 5,
    borderLeftColor: '#ff9800',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.05,
        shadowRadius: 4,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  alertDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#f44336',
    marginRight: 10,
  },
  alertText: {
    flex: 1,
    fontSize: 13,
    color: '#333',
    lineHeight: 18,
  },
  alertLocation: {
    fontWeight: 'bold',
    color: '#2d5016',
  },
});

