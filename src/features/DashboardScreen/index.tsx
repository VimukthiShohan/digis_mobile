import React from 'react';
import { Text } from 'react-native';

import { DigisButton } from '@components/common';
import SafeAreaViewContainer from '@layouts/SafeAreaViewContainer.tsx';
import { BottomSheetModalRef, DigisBottomSheetModal } from '@components/specific';

const DashboardScreen = () => {
  const bottomSheetRef = React.useRef<BottomSheetModalRef>(null);

  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isModalOpen) bottomSheetRef.current?.present();
    else bottomSheetRef.current?.dismiss();
  }, [isModalOpen]);

  return (
    <SafeAreaViewContainer>
      <Text>DashboardScreen</Text>

      <DigisButton title={'Open Modal'} onPress={() => setIsModalOpen(true)} />

      <DigisBottomSheetModal ref={bottomSheetRef} title={'Upload bill(s)'} onDismiss={setIsModalOpen}>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
        <Text>Content</Text>
      </DigisBottomSheetModal>
    </SafeAreaViewContainer>
  );
};

export default DashboardScreen;
