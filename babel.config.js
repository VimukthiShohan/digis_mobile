module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@api': './src/api',
          '@assets': './src/assets',
          '@components': './src/components',
          '@configs': './src/configs',
          '@features': './src/features',
          '@authFeatures': './src/features/auth/features',
          '@digiEyeFeatures': './src/features/digiEye/features',
          '@digiExFeatures': './src/features/digiEx/features',
          '@digiMedFeatures': './src/features/digiMed/features',
          '@hooks': './src/hooks',
          '@layouts': './src/layouts',
          '@navigation': './src/navigation',
          '@providers': './src/providers',
          '@store': './src/store',
          '@types': './src/types',
          '@utils': './src/utils',
        },
      },
    ],
  ],
};
