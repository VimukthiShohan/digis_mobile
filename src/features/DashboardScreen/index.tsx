import React from 'react';
import { Text } from 'react-native';

import { DigisButton } from '@components/common';
import { DigisImageUpload, MediaItem } from '@components/specific';
import SafeAreaViewContainer from '@layouts/SafeAreaViewContainer.tsx';
import { BottomSheetModalRef, DigisBottomSheetModal } from '@components/specific';

const DashboardScreen = () => {
  const [images, setImages] = React.useState<MediaItem[]>([]);

  const handleImagesChange = (newImages: MediaItem[]) => {
    setImages(newImages);
  };

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

      <DigisImageUpload
        images={images}
        onImagesChange={handleImagesChange}
        maxImages={5}
        cameraButtonText="Take Photo"
        galleryButtonText="Select from Gallery"
        buttonProps={{ color: '#007AFF' }}
      />
    </SafeAreaViewContainer>
  );
};

export default DashboardScreen;
