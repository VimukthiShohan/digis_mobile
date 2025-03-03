import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <GestureHandlerRootView>
    <SafeAreaProvider>{children}</SafeAreaProvider>
  </GestureHandlerRootView>
);

export default Providers;
