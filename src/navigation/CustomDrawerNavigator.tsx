import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';

import { APP_NAVIGATION_ROUTES } from '@configs/constants';

const CustomDrawerNavigator: React.FC<DrawerContentComponentProps> = props => (
  <DrawerContentScrollView {...props}>
    {/* Custom header */}
    <View style={styles.header}>
      <Text style={styles.headerText}>Welcome, User!</Text>
    </View>

    {/* Default drawer items */}
    <DrawerItemList {...props} />

    {/* Custom buttons section */}
    <View style={styles.customSection}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate(APP_NAVIGATION_ROUTES.DASHBOARD)}>
        <Text style={styles.buttonText}>Dashboard</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => props.navigation.navigate(APP_NAVIGATION_ROUTES.PROFILE)}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          // Add your logout logic here
          console.log('Logout pressed');
        }}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  </DrawerContentScrollView>
);

const styles = StyleSheet.create({
  header: {
    padding: 20,
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  customSection: {
    marginTop: 20,
    paddingHorizontal: 10,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 15,
    backgroundColor: '#ddd',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#333',
  },
});

export default CustomDrawerNavigator;
