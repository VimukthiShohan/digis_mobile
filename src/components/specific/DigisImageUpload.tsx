import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import {
  CameraOptions,
  ImageLibraryOptions,
  launchCamera,
  launchImageLibrary,
  OptionsCommon,
} from 'react-native-image-picker';

import { requestPermission } from '@utils/permissions.ts';
import { DigisButton, DigisButtonProps } from '@components/common';

export type MediaItem = {
  uri: string;
  type: string;
  name: string;
};

type ImageUploadProps = {
  images: MediaItem[];
  onImagesChange: (images: MediaItem[]) => void;
  maxImages?: number;
  renderImage?: (image: MediaItem, index: number) => React.ReactNode;
  buttonProps?: Partial<DigisButtonProps>;
  imagesContainerStyle?: object;
  cameraButtonText?: string;
  galleryButtonText?: string;
};

export const DigisImageUpload: React.FC<ImageUploadProps> = ({
  images = [],
  onImagesChange,
  maxImages = Infinity,
  renderImage,
  buttonProps = {},
  imagesContainerStyle,
  cameraButtonText = 'Open camera',
  galleryButtonText = 'Open gallery',
}) => {
  const openCamera = async () => {
    if (images.length >= maxImages) return;

    const options: CameraOptions & OptionsCommon = {
      mediaType: 'photo',
      includeBase64: false,
      cameraType: 'back',
      saveToPhotos: false,
    };
    const permission = await requestPermission(['Camera']);
    if (permission) {
      launchCamera(options, response => {
        if (!isEmpty(response.assets)) onFileDataReceive(response.assets);
      });
    }
  };

  const openGallery = async () => {
    if (images.length >= maxImages) return;

    const options: ImageLibraryOptions = { mediaType: 'photo' };
    const permission = await requestPermission(['Storage']);

    if (permission) {
      launchImageLibrary(options, async response => {
        if (!isEmpty(response.assets)) onFileDataReceive(response.assets);
      });
    }
  };

  const onFileDataReceive = async (response: any) => {
    try {
      const newImages: MediaItem[] = [];

      response?.forEach((file: any) => {
        const fileName = `${Date.now().toString()}_${(file.fileName || file.name).replace(/\s+/g, '_')}`;

        newImages.push({
          uri: file.fileCopyUri || file.uri,
          type: file.type,
          name: fileName,
        });
      });

      onImagesChange([...images, ...newImages].slice(0, maxImages));
    } catch (e) {
      console.error('Error processing image files:', e);
    }
  };

  const removeImage = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    onImagesChange(updatedImages);
  };

  const defaultRenderImage = (image: MediaItem, index: number) => (
    <View key={image.name} style={styles.imageContainer}>
      <Image source={{ uri: image.uri }} style={styles.image} />
      <Text style={styles.imageName}>{image.name}</Text>
      <DigisButton title="Remove" onPress={() => removeImage(index)} color="#ff6b6b" />
    </View>
  );

  const showButtons = images.length < maxImages;

  return (
    <View style={styles.container}>
      {showButtons && (
        <View style={styles.buttonContainer}>
          <DigisButton onPress={openCamera} title={cameraButtonText} {...buttonProps} />
          <DigisButton onPress={openGallery} title={galleryButtonText} {...buttonProps} />
        </View>
      )}

      <View style={[styles.imagesGrid, imagesContainerStyle]}>
        {images.map((image, index) => (renderImage ? renderImage(image, index) : defaultRenderImage(image, index)))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 15,
  },
  imagesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
  imageContainer: {
    margin: 5,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
  },
  imageName: {
    fontSize: 12,
    marginTop: 5,
    width: 100,
    textAlign: 'center',
  },
});
