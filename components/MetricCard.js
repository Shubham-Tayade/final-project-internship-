import React from 'react';
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 50) / 2;

export default function MetricCard({ title, value, change, positive }) {
  return (
    <View style={[styles.card, { width: cardWidth }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <View style={styles.changeContainer}>
        <View style={[styles.indicator, positive ? styles.positiveIndicator : styles.negativeIndicator]} />
        <Text style={[styles.change, positive ? styles.positive : styles.negative]}>
          {change}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 18,
    borderRadius: 16,
    marginBottom: 12,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  title: {
    fontSize: 12,
    color: '#666',
    marginBottom: 10,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  value: {
    fontSize: 26,
    fontWeight: '700',
    color: '#1a535c',
    marginBottom: 8,
    letterSpacing: 0.5,
  },
  changeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    width: 6,
    height: 6,
    borderRadius: 3,
    marginRight: 6,
  },
  positiveIndicator: {
    backgroundColor: '#27ae60',
  },
  negativeIndicator: {
    backgroundColor: '#e74c3c',
  },
  change: {
    fontSize: 11,
    fontWeight: '600',
    letterSpacing: 0.2,
  },
  positive: {
    color: '#27ae60',
  },
  negative: {
    color: '#e74c3c',
  },
});

