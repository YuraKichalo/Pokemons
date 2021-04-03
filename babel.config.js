module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['@babel/plugin-transform-flow-strip-types'],
    ['module-resolver', {
      root: ['./'],
      alias: {
        presentation: './src/presentation',
        news: './src/news',
        api: './src/api',
        pokemons: './src/pokemons',
        species: './src/species'
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
