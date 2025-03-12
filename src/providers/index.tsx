import React from 'react';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => (
  <GestureHandlerRootView>
    <SafeAreaProvider>
      <BottomSheetModalProvider>{children}</BottomSheetModalProvider>
    </SafeAreaProvider>
  </GestureHandlerRootView>
);

export default Providers;
