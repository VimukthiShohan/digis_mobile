import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { DIGIEX_NAVIGATION_ROUTES } from '@configs/constants';
import DigiExHomeScreen from '@digiExFeatures/DigiExHomeScreen';
import DigiExNotificationsScreen from '@digiExFeatures/DigiExNotificationsScreen';

const DigiExTab = createBottomTabNavigator();
const DigiExStack = createStackNavigator();

const DigiExTabNavigator: React.FC = () => (
  <DigiExTab.Navigator initialRouteName={DIGIEX_NAVIGATION_ROUTES.DIGIEX_HOME} screenOptions={{ headerShown: false }}>
    <DigiExTab.Screen name={DIGIEX_NAVIGATION_ROUTES.DIGIEX_HOME} component={DigiExHomeScreen} />
    <DigiExTab.Screen name={DIGIEX_NAVIGATION_ROUTES.DIGIEX_NOTIFICATIONS} component={DigiExNotificationsScreen} />
  </DigiExTab.Navigator>
);

const DigiExNavigator: React.FC = () => (
  <DigiExStack.Navigator initialRouteName={DIGIEX_NAVIGATION_ROUTES.DIGIEX_TABS} screenOptions={{ headerShown: false }}>
    <DigiExStack.Screen name={DIGIEX_NAVIGATION_ROUTES.DIGIEX_TABS} component={DigiExTabNavigator} />
  </DigiExStack.Navigator>
);

export default DigiExNavigator;
