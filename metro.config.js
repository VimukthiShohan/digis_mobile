const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { wrapWithReanimatedMetroConfig } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

// Merge the default Metro configuration with any custom options
const customConfig = mergeConfig(getDefaultConfig(__dirname), config);

// Wrap the merged config with Reanimated
module.exports = wrapWithReanimatedMetroConfig(customConfig);
