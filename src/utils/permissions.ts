import { Alert, Platform } from 'react-native';
import isEmpty from 'lodash/isEmpty';
import DeviceInfo from 'react-native-device-info';
import { checkMultiple, openSettings, PERMISSIONS, request, RESULTS } from 'react-native-permissions';

export type PermissionProps = 'Camera' | 'Location' | 'Storage';

const checkPermissions = async (requiredPermissions: any[]): Promise<boolean | string[]> => {
  let response = await checkMultiple(requiredPermissions);

  let notAllowed = [];
  for (let i in response) {
    if (response[i] !== RESULTS.GRANTED && response[i] !== RESULTS.LIMITED) {
      notAllowed.push(i);
    }
  }
  return notAllowed.length > 0 ? notAllowed : true;
};

export const requestPermission = async (permission: PermissionProps[]): Promise<boolean> => {
  try {
    let requiredPermission: any = [];

    permission.map(item => {
      switch (item) {
        case 'Camera':
          requiredPermission.push(
            Platform.OS === 'android' ? PERMISSIONS.ANDROID.CAMERA : PERMISSIONS.IOS.CAMERA,
            Platform.OS === 'android' ? PERMISSIONS.ANDROID.RECORD_AUDIO : PERMISSIONS.IOS.MICROPHONE,
          );
          break;
        case 'Location':
          requiredPermission.push(
            Platform.OS === 'android' ? PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION : PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
          );
          break;
        case 'Storage':
          requiredPermission.push(
            Platform.OS === 'android'
              ? DeviceInfo.getSystemVersion() < '13'
                ? PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE
                : null
              : PERMISSIONS.IOS.PHOTO_LIBRARY,
          );
          break;
        default:
          break;
      }
    });
    if (!isEmpty(requiredPermission)) {
      return new Promise(async resolve => {
        let hasPermission: any = await checkPermissions(requiredPermission);

        if (hasPermission === true) {
          return resolve(true);
        }

        let redirect = false;
        for (let i in hasPermission) {
          let response = await request(hasPermission[i]);
          if (response !== RESULTS.GRANTED && response !== RESULTS.LIMITED) {
            redirect = true;
          }
        }
        if (redirect) {
          Alert.alert('Error', 'You have ignored required permission.', [
            {
              text: 'Ok',
              onPress: () => {
                openSettings();
                resolve(false);
              },
            },
          ]);
        } else {
          resolve(true);
        }
      });
    }

    return true;
  } catch (e: any) {
    return false;
  }
};
