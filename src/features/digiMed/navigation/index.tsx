import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DigiExHomeScreen from '@digiExFeatures/DigiExHomeScreen';
import DigiExNotificationsScreen from '@digiExFeatures/DigiExNotificationsScreen';
import { DIGIMED_NAVIGATION_ROUTES } from '@configs/constants/navigationRoutes.ts';

const DigiMedTab = createBottomTabNavigator();
const DigiMedStack = createStackNavigator();

const DigiMedTabNavigator: React.FC = () => (
  <DigiMedTab.Navigator
    initialRouteName={DIGIMED_NAVIGATION_ROUTES.DIGIMED_HOME}
    screenOptions={{ headerShown: false }}>
    <DigiMedTab.Screen name={DIGIMED_NAVIGATION_ROUTES.DIGIMED_HOME} component={DigiExHomeScreen} />
    <DigiMedTab.Screen name={DIGIMED_NAVIGATION_ROUTES.DIGIMED_NOTIFICATIONS} component={DigiExNotificationsScreen} />
  </DigiMedTab.Navigator>
);

const DigiMedNavigator: React.FC = () => (
  <DigiMedStack.Navigator
    initialRouteName={DIGIMED_NAVIGATION_ROUTES.DIGIMED_TABS}
    screenOptions={{ headerShown: false }}>
    <DigiMedStack.Screen name={DIGIMED_NAVIGATION_ROUTES.DIGIMED_TABS} component={DigiMedTabNavigator} />
  </DigiMedStack.Navigator>
);

export default DigiMedNavigator;
