import React from 'react';
import { LayoutChangeEvent, StyleSheet, useWindowDimensions } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { BottomSheetBackdrop, BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';

import { Colors } from '@assets/theme';
import { DigisBottomSheetModalChildren, DigisBottomSheetModalHeader } from '@components/specific';

export type BottomSheetModalRef = BottomSheetModal;

interface DigisBottomModalProps {
  children: React.ReactNode;
  onDismiss?: (status: boolean) => void;
  title?: string;
  onDismissDisabled?: boolean;
  disableScrollable?: boolean;
  disableOverDrag?: boolean;
  actionButtons?: boolean;
  positiveActionDisabled?: boolean;
  actionPositiveOnPress?: () => void;
  actionNegativeOnPress?: () => void;
  actionPositiveLabel?: string;
  actionNegativeLabel?: string;
  reject?: boolean;
  appEntry?: boolean;
  transparent?: boolean;
  detached?: boolean;
}

export const DigisBottomSheetModal = React.forwardRef<BottomSheetModalRef, DigisBottomModalProps>((props, ref) => {
  const {
    children,
    onDismiss,
    title,
    onDismissDisabled = false,
    disableScrollable = false,
    disableOverDrag = false,
    actionButtons = false,
    positiveActionDisabled,
    actionPositiveOnPress,
    actionNegativeOnPress,
    actionPositiveLabel,
    actionNegativeLabel,
    reject,
    appEntry,
    transparent = false,
    detached = false,
  } = props;

  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();

  const [detachedBottomInset, setDetachedBottomInset] = React.useState(0);

  const handleContentLayout = React.useCallback(
    ({ nativeEvent: { layout } }: LayoutChangeEvent) => {
      setDetachedBottomInset((windowHeight - layout.height) / 2);
    },
    [windowHeight],
  );

  const renderBackdrop = React.useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        appearsOnIndex={0}
        disappearsOnIndex={-1}
        opacity={1}
        pressBehavior={onDismissDisabled ? 'none' : 'close'}
        {...props}
        style={[props.style, { backgroundColor: Colors.modalBackdrop }]}
      />
    ),
    [onDismissDisabled],
  );

  const renderChild = () => (
    <DigisBottomSheetModalChildren
      children={children}
      onLayout={handleContentLayout}
      actionButtons={actionButtons}
      actionNegativeLabel={actionNegativeLabel}
      actionPositiveOnPress={actionPositiveOnPress}
      actionNegativeOnPress={actionNegativeOnPress}
      actionPositiveLabel={actionPositiveLabel}
      positiveActionDisabled={positiveActionDisabled}
      reject={reject}
      appEntry={appEntry}
    />
  );

  return (
    <BottomSheetModal
      ref={ref}
      onDismiss={() => onDismiss?.(false)}
      backdropComponent={renderBackdrop}
      enableHandlePanningGesture={!onDismissDisabled}
      enableContentPanningGesture={false}
      topInset={insets.top + 15}
      detached={detached}
      bottomInset={detached ? detachedBottomInset : undefined}
      keyboardBehavior={'interactive'}
      keyboardBlurBehavior={'restore'}
      android_keyboardInputMode={'adjustPan'}
      enableDynamicSizing={true}
      enableOverDrag={!disableOverDrag}
      handleComponent={transparent ? null : props => <DigisBottomSheetModalHeader title={title} {...props} />}
      style={styles.bottomSheetContainer}
      backgroundStyle={[
        styles.bottomSheetModalS,
        { backgroundColor: transparent ? 'transparent' : Colors.background },
      ]}>
      {disableScrollable ? renderChild() : <BottomSheetScrollView>{renderChild()}</BottomSheetScrollView>}
    </BottomSheetModal>
  );
});

const styles = StyleSheet.create({
  bottomSheetContainer: {
    paddingHorizontal: '4%',
  },
  bottomSheetModalS: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
});
