import React from 'react';
import { Text } from 'react-native';

import { DigisImageUpload, MediaItem } from '@components/specific';
import SafeAreaViewContainer from '@layouts/SafeAreaViewContainer.tsx';

const DashboardScreen = () => {
  const [images, setImages] = React.useState<MediaItem[]>([]);

  const handleImagesChange = (newImages: MediaItem[]) => {
    setImages(newImages);
  };

  return (
    <SafeAreaViewContainer>
      <Text>DashboardScreen</Text>

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
