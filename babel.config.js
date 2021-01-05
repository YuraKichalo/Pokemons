module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: ['./'],
      alias: {
        presentation: './src/presentation',
        pokemonNews: './src/pokemonNews'
      }
    }],
    ["@babel/plugin-proposal-decorators", {
      "legacy": true
    }],
    ["@babel/plugin-proposal-class-properties", {
    "loose": false
    }]
  ]
};
