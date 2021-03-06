const path = require('path');

module.exports = [
  {
    entry: './src/renderer.tsx',
    context: __dirname,
    target: 'electron-renderer',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    },
    externals: [
      {
        '@k8slens/extensions': 'var global.LensExtensions',
        'react-router-dom': 'var global.ReactRouterDom',
        'react': 'var global.React',
        'mobx': 'var global.Mobx'
      }
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    output: {
      libraryTarget: 'commonjs2',
      globalObject: 'this',
      filename: 'renderer.js',
      path: path.resolve(__dirname, 'dist')
    }
  }
];
