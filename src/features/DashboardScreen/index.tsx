import React from 'react';
import { Text } from 'react-native';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
  OptionsCommon,
} from 'react-native-image-picker';

import { requestPermission } from '@utils/permissions.ts';
import { DigisTouchableOpacity } from '@components/common';
import SafeAreaViewContainer from '@layouts/SafeAreaViewContainer.tsx';

const DashboardScreen = () => {
  const openCamera = async () => {
    const options: CameraOptions & OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'back',
      saveToPhotos: false,
    };
    const permission = await requestPermission(['Camera']);
    if (permission) {
      launchCamera(options, response => {
        console.log('openCamera>>>response>>>', response);
      });
    }
  };

  const openImagePicker = async () => {
    const options: ImageLibraryOptions = { mediaType: 'photo' };
    const permission = await requestPermission(['Storage']);

    if (permission) {
      launchImageLibrary(options, async response => {
        console.log('openImagePicker>>>response>>>', response);
      });
    }
  };

  return (
    <SafeAreaViewContainer>
      <Text>DashboardScreen</Text>
      <DigisTouchableOpacity onPress={openCamera}>
        <Text>openCamera</Text>
      </DigisTouchableOpacity>
      <DigisTouchableOpacity onPress={openImagePicker}>
        <Text>openImagePicker</Text>
      </DigisTouchableOpacity>
    </SafeAreaViewContainer>
  );
};

export default DashboardScreen;
