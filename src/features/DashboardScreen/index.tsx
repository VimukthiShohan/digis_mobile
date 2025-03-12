import React from 'react';
import { Text } from 'react-native';

import { DigisButton } from '@components/common';
import { DigisImageUpload, MediaItem } from '@components/specific';
import SafeAreaViewContainer from '@layouts/SafeAreaViewContainer.tsx';
import { BottomSheetModalRef, DigisBottomSheetModal } from '@components/specific';

const DashboardScreen = () => {
  const bottomSheetRef = React.useRef<BottomSheetModalRef>(null);

  const [images, setImages] = React.useState<MediaItem[]>([]);
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (isModalOpen) bottomSheetRef.current?.present();
    else bottomSheetRef.current?.dismiss();
  }, [isModalOpen]);

  const handleImagesChange = (newImages: MediaItem[]) => {
    setImages(newImages);
  };

  return (
    <SafeAreaViewContainer>
      <Text>DashboardScreen</Text>

      <DigisButton title={'Open Modal'} onPress={() => setIsModalOpen(true)} />

      <DigisImageUpload
        images={images}
        onImagesChange={handleImagesChange}
        maxImages={5}
        cameraButtonText="Take Photo"
        galleryButtonText="Select from Gallery"
        buttonProps={{ color: '#007AFF' }}
      />

      <DigisBottomSheetModal ref={bottomSheetRef} title={'Upload bill(s)'} onDismiss={setIsModalOpen}>
        <DigisImageUpload
          images={images}
          onImagesChange={handleImagesChange}
          maxImages={5}
          cameraButtonText="Take Photo"
          galleryButtonText="Select from Gallery"
          buttonProps={{ color: '#007AFF' }}
        />
      </DigisBottomSheetModal>
    </SafeAreaViewContainer>
  );
};

export default DashboardScreen;
