import React from 'react';
import { View, Text, StyleSheet, ScrollView, Platform } from 'react-native';

const reports = [
  {
    date: '02 Nov 2025, 14:30',
    division: 'Corbett TR (Div-B)',
    type: 'Poaching Evidence',
    status: 'Unresolved',
    reportedBy: 'Ranger R. Singh',
    verified: 'No',
  },
  {
    date: '02 Nov 2025, 11:15',
    division: 'Kanha TR (Core)',
    type: 'Animal Sighting',
    status: 'Resolved',
    reportedBy: 'Guard P. Kumar',
    verified: 'Yes',
  },
  {
    date: '02 Nov 2025, 09:05',
    division: 'Sariska TR (Buffer)',
    type: 'Fire Alert (IoT)',
    status: 'Pending',
    reportedBy: 'Sensor ID #F-102',
    verified: 'No',
  },
  {
    date: '01 Nov 2025, 17:45',
    division: 'Ranthambore NP',
    type: 'Human-Animal Conflict',
    status: 'Resolved',
    reportedBy: 'Citizen App',
    verified: 'Yes',
  },
  {
    date: '01 Nov 2025, 16:20',
    division: 'Kaziranga NP',
    type: 'Encroachment',
    status: 'Unresolved',
    reportedBy: 'Ranger M. Das',
    verified: 'Yes',
  },
];

export default function FieldReportsTable() {
  const getStatusColor = (status) => {
    switch (status) {
      case 'Resolved':
        return '#4caf50';
      case 'Unresolved':
        return '#f44336';
      case 'Pending':
        return '#ff9800';
      default:
        return '#666';
    }
  };

  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View>
        {/* Header Row */}
        <View style={styles.headerRow}>
          <Text style={[styles.headerCell, { width: 120 }]}>Date</Text>
          <Text style={[styles.headerCell, { width: 140 }]}>Division</Text>
          <Text style={[styles.headerCell, { width: 130 }]}>Incident Type</Text>
          <Text style={[styles.headerCell, { width: 100 }]}>Status</Text>
          <Text style={[styles.headerCell, { width: 120 }]}>Reported By</Text>
          <Text style={[styles.headerCell, { width: 80 }]}>Verified</Text>
        </View>

        {/* Data Rows */}
        {reports.map((report, index) => (
          <View key={index} style={styles.dataRow}>
            <Text style={[styles.dataCell, { width: 120 }]}>{report.date}</Text>
            <Text style={[styles.dataCell, { width: 140 }]}>{report.division}</Text>
            <Text style={[styles.dataCell, { width: 130 }]}>{report.type}</Text>
            <View style={[styles.statusBadge, { backgroundColor: getStatusColor(report.status) }]}>
              <Text style={styles.statusText}>{report.status}</Text>
            </View>
            <Text style={[styles.dataCell, { width: 120 }]}>{report.reportedBy}</Text>
            <Text style={[styles.dataCell, { width: 80 }]}>{report.verified}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#2c6e49',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  headerCell: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 11,
    textAlign: 'center',
    letterSpacing: 0.3,
  },
  dataRow: {
    flexDirection: 'row',
    paddingVertical: 14,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e8e8e8',
    alignItems: 'center',
    backgroundColor: '#fafafa',
  },
  dataCell: {
    fontSize: 10,
    color: '#333',
    textAlign: 'center',
    paddingHorizontal: 4,
    fontWeight: '500',
  },
  statusBadge: {
    minWidth: 90,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 14,
    alignItems: 'center',
    marginHorizontal: 4,
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
      },
      android: {
        elevation: 2,
      },
    }),
  },
  statusText: {
    color: '#fff',
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});

