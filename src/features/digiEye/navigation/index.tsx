import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import DigiEyeHomeScreen from '@digiEyeFeatures/DigiEyeHomeScreen';
import { DIGIEYE_NAVIGATION_ROUTES } from '@configs/constants/navigationRoutes.ts';
import DigiEyeInspectionFormScreen from '@digiEyeFeatures/DigiEyeInspectionFormScreen';

const DigiEyeStack = createStackNavigator();

const DigiEyeNavigator: React.FC = () => (
  <DigiEyeStack.Navigator
    initialRouteName={DIGIEYE_NAVIGATION_ROUTES.DIGIEYE_HOME}
    screenOptions={{ headerShown: false }}>
    <DigiEyeStack.Screen name={DIGIEYE_NAVIGATION_ROUTES.DIGIEYE_HOME} component={DigiEyeHomeScreen} />
    <DigiEyeStack.Screen
      name={DIGIEYE_NAVIGATION_ROUTES.DIGIEYE_INSPECTION_FORM}
      component={DigiEyeInspectionFormScreen}
    />
  </DigiEyeStack.Navigator>
);

export default DigiEyeNavigator;
