module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: 'current',
        },
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@root': './',
        '@configuration': './configuration',
        '@application': './src/application',
        '@domain': './src/domain',
        '@infrastructure': './src/infrastructure',
      },
    }],
  ],
  ignore: [
    '**/*.test.js',
    '**/*.test.ts',
    'node_modules',
    '.editorconfig',
    'newrelic.js',
  ],
};
