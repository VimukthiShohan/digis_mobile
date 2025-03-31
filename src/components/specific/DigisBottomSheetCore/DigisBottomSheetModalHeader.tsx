import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { useBottomSheetModal } from '@gorhom/bottom-sheet';

import { Colors } from '@assets/theme';

interface DigisBottomSheetModalHeaderProps {
  title?: string;
  // onDismissDisabled?: boolean;
}

export const DigisBottomSheetModalHeader: React.FC<DigisBottomSheetModalHeaderProps> = ({
  title,
  // onDismissDisabled,
}) => {
  // const { dismiss } = useBottomSheetModal();

  return (
    <View style={styles.headerContainer}>
      <View style={styles.BSHandle} />
      {title && (
        <View style={styles.headerTitleContainer}>
          <Text style={styles.titleText}>{title}</Text>
          {/*{!onDismissDisabled && (*/}
          {/*  <IconButton*/}
          {/*    icon={'close'}*/}
          {/*    iconColor={Colors.onSurfaceDisabled}*/}
          {/*    onPress={() => dismiss()}*/}
          {/*    rippleColor={Colors.elevation.level0}*/}
          {/*    size={22}*/}
          {/*    style={styles.closeButton}*/}
          {/*    accessibilityLabel="Close Button"*/}
          {/*  />*/}
          {/*)}*/}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',
    backgroundColor: Colors.background,
    width: '100%',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  BSHandle: {
    width: 30,
    height: 4,
    borderRadius: 15,
    backgroundColor: Colors.onSurfaceDisabled,
    marginTop: 11,
    marginBottom: 12,
  },
  headerTitleContainer: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '100%',
    marginBottom: '4%',
    alignItems: 'center',
  },
  titleText: {
    color: Colors.authTitle,
    fontWeight: '600',
  },
  closeButton: {
    position: 'absolute',
    right: -10,
  },
});
