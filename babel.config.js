module.exports = {
  presets: [
    ['@babel/preset-env', {'corejs': '2', 'useBuiltIns': 'entry'}],
    ["@babel/preset-react", {
      "runtime": "automatic"
    }],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties', 'lodash',
    ['@babel/plugin-transform-classes', {
      'loose': true,
    }],
  ],
  env: {
    test: {
      plugins: [
        '@babel/plugin-transform-modules-commonjs',
        '@babel/plugin-transform-runtime',
      ],
    },
  },
};
