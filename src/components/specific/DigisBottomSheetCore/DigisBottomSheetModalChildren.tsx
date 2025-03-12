import React from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { BottomSheetView } from '@gorhom/bottom-sheet';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Colors } from '@assets/theme';
import { DigisButton, DigisTouchableOpacity } from '@components/common';

interface DigisBottomSheetModalChildrenProps {
  children: React.ReactNode;
  actionButtons?: boolean;
  actionPositiveLabel?: string;
  actionNegativeLabel?: string;
  actionPositiveOnPress?: () => void;
  actionNegativeOnPress?: () => void;
  positiveActionDisabled?: boolean;
  reject?: boolean;
  appEntry?: boolean;
  onLayout?: (event: LayoutChangeEvent) => void;
}

export const DigisBottomSheetModalChildren: React.FC<DigisBottomSheetModalChildrenProps> = ({
  children,
  actionButtons,
  actionPositiveLabel,
  actionNegativeLabel,
  actionPositiveOnPress,
  actionNegativeOnPress,
  positiveActionDisabled,
  reject,
  appEntry,
  onLayout,
}) => {
  const insets = useSafeAreaInsets();

  return (
    <BottomSheetView onLayout={onLayout} style={{ paddingBottom: insets.bottom }}>
      {children}
      {actionButtons && (
        <View style={[styles.actionButtonsContainer, actionPositiveLabel && styles.actionButtonsContainerWithLabel]}>
          {actionNegativeLabel && (
            <DigisTouchableOpacity onPress={() => actionNegativeOnPress?.()}>
              <DigisButton
                key={`button_${actionNegativeLabel}_${appEntry}`}
                // style={styles.actionButton}
                title={actionNegativeLabel}
                {...(appEntry && { textColor: Colors.tertiaryContainer })}
              />
            </DigisTouchableOpacity>
          )}
          {actionPositiveLabel && (
            <DigisTouchableOpacity onPress={() => actionPositiveOnPress?.()} disabled={positiveActionDisabled}>
              <DigisButton
                key={`button_${actionPositiveLabel}_${appEntry}_${reject}_${positiveActionDisabled}`}
                // buttonColor={reject ? Colors.onError : appEntry ? Colors.onSuccessContainer : Colors.success}
                // contentStyle={styles.actionButtons}
                // style={styles.positiveActionButton}
                // rippleColor={reject ? Colors.onError : Colors.success}
                // textColor={Colors.onSuccess}
                title={actionPositiveLabel}
                disabled={positiveActionDisabled}
              />
            </DigisTouchableOpacity>
          )}
        </View>
      )}
    </BottomSheetView>
  );
};

const styles = StyleSheet.create({
  actionButtonsContainer: {
    paddingVertical: '5%',
    justifyContent: 'flex-end',
    flexDirection: 'row',
  },
  actionButtonsContainerWithLabel: {
    gap: 8,
  },
  actionButton: {
    fontSize: 13,
    textDecorationLine: 'underline',
    color: Colors.primary,
    textAlign: 'center',
    marginTop: 6,
  },
  actionButtons: {
    width: 'auto',
    borderRadius: 8,
  },
  positiveActionButton: {
    borderRadius: 8,
  },
});
