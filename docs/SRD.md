# 📢 Software Requirement Document (SRD)

**Project Title:** Forest & Wildlife Dashboard Mobile App - MoEFCC

**Prepared By (Team Members):** Development Team

**Date of Submission:** 14/12/2025

**Version:** 1.0

---

## 1. Introduction

### 1.1 Purpose

The Forest & Wildlife Dashboard Mobile App aims to provide real-time monitoring and management capabilities for forest and wildlife conservation efforts. The system addresses the critical need for field rangers, administrators, and decision-makers to access integrated data, monitor patrol activities, track wildlife sightings, manage fire alerts, and view AI-driven insights through a unified mobile platform. This application empowers users to detect risks early, respond faster, enhance transparency, and promote data-backed conservation practices across forest divisions in India.

### 1.2 Scope

The mobile application will include:
- **Dashboard Interface:** Real-time metrics display (Active Patrols, Wildlife Sightings, Fire Alerts, Afforestation Projects)
- **Data Visualizations:** Interactive charts for incidents, conflict types, and patrol trends
- **Field Reports Management:** Latest incident reports with status tracking and verification
- **AI Insights Panel:** Poaching hotspot predictions, carbon credit forecasts, and patrol alerts
- **Responsive Design:** Optimized for mobile devices with modern UI/UX

The system will **not** include:
- Backend API development (uses mock data)
- User authentication in initial release
- Real-time IoT sensor integration
- Payment processing
- Advanced AI/ML model training

### 1.3 Objectives

- Enable real-time monitoring of forest activity, patrol movements, and wildlife sightings across all divisions
- Improve incident reporting and tracking workflows with visual status indicators
- Support mobile-first access for field rangers and administrators
- Provide AI-driven insights for proactive decision-making
- Centralize all patrol, incident, and wildlife data for accurate reporting and trend analysis

### 1.4 Definitions / Abbreviations

- **MoEFCC:** Ministry of Environment, Forest and Climate Change
- **IoT:** Internet of Things (sensor-based monitoring devices)
- **Expo:** React Native framework for building mobile applications
- **RBAC:** Role-Based Access Control
- **API:** Application Programming Interface
- **AI/ML:** Artificial Intelligence / Machine Learning

---

## 2. System Description

### 2.1 System Overview

The Forest & Wildlife Dashboard is a React Native mobile application built with Expo, designed for forest and wildlife departments to monitor real-time activity across all forest divisions. The system allows administrators, rangers, and analysts to visualize incidents, patrol activities, wildlife sightings, fire alerts, and afforestation projects through an interactive mobile interface. It integrates AI-driven predictive analytics to highlight potential poaching hotspots, carbon credit forecasts, and patrol alerts, providing a centralized platform that supports informed decision-making and efficient field operations.

### 2.2 System Users

| User Type | Role Description |
|----------|------------------|
| **Administrator** | Full system access, manages dashboards, views all reports, configures system settings, oversees patrols, incidents, and analytics |
| **Ranger** | Views dashboard metrics, monitors patrol activities, tracks incidents, receives alerts, and accesses field reports |
| **Analyst** | Reviews and analyzes incident trends, patrol data, wildlife sightings, and generates insights from AI predictions |
| **Field Officer** | Accesses real-time alerts, views patrol status, monitors fire alerts, and tracks wildlife sightings in their assigned divisions |

### 2.3 Operating Environment

- **Platform:** Mobile (iOS & Android)
- **Framework:** React Native with Expo
- **Browsers:** Chrome, Safari, Firefox (for web preview)
- **Devices:** Smartphones (primary), Tablets (supported)
- **Minimum OS Versions:** iOS 13+, Android 8.0+
- **Development Environment:** Node.js 18+, npm/yarn

---

## 3. Functional Requirements

| Module Name | Description | Inputs | Outputs | Dependencies |
|------------|-------------|--------|---------|--------------|
| **Dashboard** | Displays real-time metrics and analytics in cards and charts | User session | Metric cards, Charts, Data visualizations | API server, Chart library |
| **Metrics Display** | Shows Active Patrols, Wildlife Sightings, Fire Alerts, Afforestation Projects | None | 4 metric cards with values and trends | Data service |
| **Charts Section** | Visualizes incidents by state, conflict types, and patrol trends | Filter parameters | Bar charts, Pie charts, Line charts | react-native-chart-kit |
| **Field Reports** | Lists latest incident reports with status, division, and verification | Date range, Filters | Scrollable table with report data | Reports API |
| **AI Insights** | Provides poaching hotspot predictions, carbon forecasts, and alerts | None | Risk scores, Forecasts, Alert notifications | AI/ML service |
| **Navigation** | Handles screen navigation and routing | User actions | Screen transitions | React Navigation |

---

## 4. Non-Functional Requirements

| Category | Description |
|----------|-------------|
| **Performance** | App should load within 2-3 seconds, charts render smoothly, scroll performance optimized for 60fps |
| **Security** | Secure data transmission, input validation, safe handling of sensitive forest data |
| **Usability** | Intuitive, responsive mobile-first design with clear visual hierarchy and easy navigation |
| **Reliability** | App should handle network errors gracefully, provide offline fallbacks where possible |
| **Scalability** | Modular component architecture for easy feature additions and updates |
| **Maintainability** | Clean code structure, reusable components, comprehensive documentation |
| **Compatibility** | Works on iOS and Android devices, responsive to different screen sizes |
| **Accessibility** | Supports screen readers, proper contrast ratios, touch-friendly interface |

---

## 5. System Architecture

```
Mobile App (React Native/Expo)
    ↓
Navigation Layer (React Navigation)
    ↓
Components Layer
    ├── Dashboard Screen
    ├── Metric Cards
    ├── Charts Section
    ├── Field Reports Table
    └── AI Insights Panel
    ↓
Data Layer (Mock Data / Future API Integration)
    ↓
External Services (Future)
    ├── Backend API
    ├── IoT Sensors
    └── AI/ML Models
```

---

## 6. Tools and Technologies

| Category | Technology / Tool |
|----------|-------------------|
| **Frontend Framework** | React Native 0.72.6 |
| **Development Platform** | Expo SDK 49.0.0 |
| **Navigation** | React Navigation 6.x |
| **Charts** | react-native-chart-kit 6.12.0 |
| **UI Components** | React Native Core Components |
| **Styling** | StyleSheet API, Linear Gradients (expo-linear-gradient) |
| **Version Control** | Git, GitHub |
| **Package Manager** | npm |
| **Deployment** | Netlify (Web), Expo Go (Mobile) |
| **IDE** | VS Code |
| **Testing** | Expo Go App (iOS/Android) |

---

## 7. Future Enhancements

1. **Backend Integration:** Connect to real API endpoints for live data
2. **User Authentication:** Implement login/signup with JWT tokens
3. **Real-time Updates:** WebSocket integration for live alerts and notifications
4. **Offline Support:** Cache data locally for offline access
5. **Push Notifications:** Alert users about critical incidents and fire alerts
6. **Advanced Analytics:** Machine learning models for predictive insights
7. **IoT Integration:** Real-time sensor data from fire alarms, camera traps
8. **Geolocation:** GPS tracking for patrol routes and incident locations
9. **Photo Upload:** Allow rangers to upload evidence photos
10. **Multi-language Support:** Support for regional languages

---

## 8. References

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Expo Documentation](https://docs.expo.dev/)
- [React Navigation Docs](https://reactnavigation.org/)
- [React Native Chart Kit](https://github.com/indiespirit/react-native-chart-kit)
- [MoEFCC Official Website](https://moef.gov.in/)

---

## 9. Folder Structure

```
forest-wildlife-dashboard/
│
├── assets/                  # Static assets (images, icons)
│   └── (placeholder for future assets)
│
├── components/              # Reusable UI components
│   ├── MetricCard.js       # Metric display cards
│   ├── ChartsSection.js    # Chart visualizations
│   ├── FieldReportsTable.js # Reports table component
│   └── AIInsightsPanel.js  # AI insights display
│
├── screens/                 # Screen components
│   └── DashboardScreen.js  # Main dashboard screen
│
├── docs/                    # Documentation
│   └── SRD.md              # This document
│
├── App.js                   # Main app entry point
├── app.json                 # Expo configuration
├── babel.config.js          # Babel configuration
├── package.json             # Dependencies and scripts
├── .gitignore               # Git ignore rules
├── netlify.toml             # Netlify deployment config
├── preview.html             # Web preview version
└── README.md                # Project documentation
```

---

## 10. Deployment Information

- **GitHub Repository:** https://github.com/Shubham-Tayade/final-project-internship-
- **Live Demo (Web):** https://forest-wildlife-dashboard.netlify.app
- **Mobile App:** Available via Expo Go (scan QR code from `npm start`)

---

## 11. Key Features Implemented

### 11.1 Dashboard Metrics
- Active Patrols Today: 1,482 (+5.2% vs yesterday)
- Wildlife Sightings: 312 (+2.1% vs last week)
- Fire Alerts: 19 (-1.5% vs yesterday)
- Afforestation Projects: 8,940 Ha (+112 Ha this month)

### 11.2 Data Visualizations
- **Bar Chart:** Incidents Reported vs Resolved (State-wise)
- **Pie Chart:** Wildlife Conflict Types distribution
- **Line Chart:** Patrol Activity Trends (Last 30 Days)
- **Heatmap Placeholder:** GIS-based alerts visualization

### 11.3 Field Reports
- Latest 5 incident reports with:
  - Date and time
  - Division/Zone information
  - Incident type
  - Status (Resolved/Unresolved/Pending)
  - Reported by
  - Verification status

### 11.4 AI Insights Panel
- **Top 5 Poaching Hotspots:** Risk percentage predictions
- **Carbon Credit Forecast:** +1.2k tons CO₂e potential
- **Patrol Alerts:** High-risk windows and sensor notifications

---

## 12. Testing & Quality Assurance

- **Manual Testing:** Tested on Expo Go (iOS/Android simulators)
- **Responsive Design:** Verified on multiple screen sizes
- **Performance:** Optimized chart rendering and scroll performance
- **Browser Compatibility:** Tested on Chrome, Firefox, Edge

---

## 13. Project Status

**Current Version:** 1.0  
**Status:** ✅ Deployed and Live  
**Last Updated:** 14/12/2025

---

**End of Document**

