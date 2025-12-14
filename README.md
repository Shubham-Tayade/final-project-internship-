# Forest & Wildlife Dashboard Mobile App

A React Native mobile application for the MoEFCC (Ministry of Environment, Forest and Climate Change) dashboard, providing real-time monitoring of forest and wildlife management activities.

## Features

- **Dashboard Metrics**: Active patrols, wildlife sightings, fire alerts, and afforestation projects
- **Data Visualizations**: Charts for incidents, conflict types, and patrol trends
- **Field Reports**: Latest incident reports with status tracking
- **AI Insights**: Poaching hotspot predictions, carbon credit forecasts, and patrol alerts
- **Real-time Updates**: Live data from IoT sensors and field reports

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the Expo development server:
```bash
npm start
```

3. Run on your device:
   - Scan the QR code with Expo Go app (iOS/Android)
   - Or press `a` for Android emulator, `i` for iOS simulator

## Project Structure

```
├── App.js                 # Main app entry with navigation
├── screens/
│   └── DashboardScreen.js # Main dashboard screen
├── components/
│   ├── MetricCard.js      # Metric display cards
│   ├── ChartsSection.js   # Chart visualizations
│   ├── FieldReportsTable.js # Reports table
│   └── AIInsightsPanel.js  # AI insights component
└── package.json
```

## Technologies Used

- React Native
- Expo
- React Navigation
- React Native Chart Kit
- React Native SVG

## Development

This app uses Expo for easy development and deployment. Make sure you have Node.js and npm installed.

For production build:
```bash
expo build:android
expo build:ios
```

## License

© 2025 PugArch Technology Pvt. Ltd.

