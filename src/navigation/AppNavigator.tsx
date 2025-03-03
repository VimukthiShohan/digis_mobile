import React from 'react';
import { createDrawerNavigator, DrawerContentComponentProps } from '@react-navigation/drawer';

import ProfileScreen from '@features/ProfileScreen';
import DashboardScreen from '@features/DashboardScreen';
import DigiExNavigator from '@features/digiEx/navigation';
import DigiEyeNavigator from '@features/digiEye/navigation';
import DigiMedNavigator from '@features/digiMed/navigation';
import CustomDrawerNavigator from '@navigation/CustomDrawerNavigator.tsx';
import { APP_NAVIGATION_ROUTES, AppNavigationParamList } from '@configs/constants/navigationRoutes.ts';

const AppDrawer = createDrawerNavigator<AppNavigationParamList>();

const AppNavigator: React.FC = () => {
  const renderDrawerContent = React.useCallback(
    (props: DrawerContentComponentProps) => <CustomDrawerNavigator {...props} />,
    [],
  );

  return (
    <AppDrawer.Navigator
      initialRouteName={APP_NAVIGATION_ROUTES.DASHBOARD}
      drawerContent={renderDrawerContent}
      screenOptions={{ headerShown: false }}>
      <AppDrawer.Screen name={APP_NAVIGATION_ROUTES.DASHBOARD} component={DashboardScreen} />
      <AppDrawer.Screen name={APP_NAVIGATION_ROUTES.DIGIEX} component={DigiExNavigator} />
      <AppDrawer.Screen name={APP_NAVIGATION_ROUTES.DIGIMED} component={DigiMedNavigator} />
      <AppDrawer.Screen name={APP_NAVIGATION_ROUTES.DIGIEYE} component={DigiEyeNavigator} />
      <AppDrawer.Screen name={APP_NAVIGATION_ROUTES.PROFILE} component={ProfileScreen} />
    </AppDrawer.Navigator>
  );
};

export default AppNavigator;
