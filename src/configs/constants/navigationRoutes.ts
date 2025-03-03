export const ROOT_NAVIGATION_ROUTES = {
  APP: 'App',
  AUTH: 'Auth',
} as const;

export const AUTH_NAVIGATION_ROUTES = {
  LANDING: 'Landing',
  LOGIN: 'Login',
  OTP: 'OTP',
} as const;

export const APP_NAVIGATION_ROUTES = {
  DASHBOARD: 'Dashboard',
  DIGIEX: 'DigiEx',
  DIGIMED: 'DigiMed',
  DIGIEYE: 'DigiEye',
  PROFILE: 'Profile',
} as const;

export type AppNavigationParamList = {
  [APP_NAVIGATION_ROUTES.DASHBOARD]: undefined;
  [APP_NAVIGATION_ROUTES.DIGIEX]: undefined;
  [APP_NAVIGATION_ROUTES.DIGIMED]: undefined;
  [APP_NAVIGATION_ROUTES.DIGIEYE]: undefined;
  [APP_NAVIGATION_ROUTES.PROFILE]: undefined;
};

export const DIGIEYE_NAVIGATION_ROUTES = {
  DIGIEYE_HOME: 'DigiEyeHome',
  DIGIEYE_INSPECTION_FORM: 'DigiEyeInspectionForm',
} as const;

export const DIGIEX_NAVIGATION_ROUTES = {
  DIGIEX_TABS: 'DigiExTabs',
  DIGIEX_HOME: 'DigiExHome',
  DIGIEX_NOTIFICATIONS: 'DigiExNotifications',
} as const;

export const DIGIMED_NAVIGATION_ROUTES = {
  DIGIMED_TABS: 'DigiMedTabs',
  DIGIMED_HOME: 'DigiMedHome',
  DIGIMED_NOTIFICATIONS: 'DigiMedNotifications',
} as const;
