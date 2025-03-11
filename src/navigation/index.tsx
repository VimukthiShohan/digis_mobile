import React from 'react';
import { useLogger } from '@react-navigation/devtools';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, NavigationContainerRef, useNavigationContainerRef } from '@react-navigation/native';

import AppNavigator from './AppNavigator.tsx';
import AuthNavigator from '@features/auth/navigation';
import { ROOT_NAVIGATION_ROUTES } from '@configs/constants';

const RootStack = createStackNavigator();

const Navigation: React.FC = () => {
  const navigationRef = useNavigationContainerRef();
  useLogger(navigationRef as React.MutableRefObject<NavigationContainerRef<any>>);

  // TODO: Replace with your actual authentication logic
  const isAuthenticated = true;

  return (
    <NavigationContainer ref={navigationRef}>
      <RootStack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <RootStack.Screen name={ROOT_NAVIGATION_ROUTES.APP} component={AppNavigator} />
        ) : (
          <RootStack.Screen name={ROOT_NAVIGATION_ROUTES.AUTH} component={AuthNavigator} />
        )}
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
