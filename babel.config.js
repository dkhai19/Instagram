module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'], // Matches baseUrl
        alias: {
          '@components': './src/components', // Matches paths in tsconfig.json
          '@screens': './src/screens',
          '@hooks': './src/hooks',
          '@constants': './src/constants',
          '@assets': './src/assets'
        }
      }
    ]
  ]
};
