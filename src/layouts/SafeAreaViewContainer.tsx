import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

interface SafeAreaViewContainerProps {
  children: React.ReactNode;
}

const SafeAreaViewContainer: React.FC<SafeAreaViewContainerProps> = ({ children }) => (
  <SafeAreaView>{children}</SafeAreaView>
);

export default SafeAreaViewContainer;
