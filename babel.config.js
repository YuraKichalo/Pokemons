module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: {
        presentation: './src/presentation',
      }
    }],
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }]
  ]
};
