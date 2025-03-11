import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import OTPScreen from '@authFeatures/OTPScreen';
import LoginScreen from '@authFeatures/LoginScreen';
import LandingScreen from '@authFeatures/LandingScreen';
import { AUTH_NAVIGATION_ROUTES } from '@configs/constants';

const AuthStack = createStackNavigator();

const AuthNavigator: React.FC = () => (
  <AuthStack.Navigator initialRouteName={AUTH_NAVIGATION_ROUTES.LANDING} screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name={AUTH_NAVIGATION_ROUTES.LANDING} component={LandingScreen} />
    <AuthStack.Screen name={AUTH_NAVIGATION_ROUTES.LOGIN} component={LoginScreen} />
    <AuthStack.Screen name={AUTH_NAVIGATION_ROUTES.OTP} component={OTPScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigator;
