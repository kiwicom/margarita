// @flow

module.exports = {
  module: {
    rules: [
      {
        test: /\.(?:png|jpe?g|gif)$/,
        use:
          'react-native-web-image-loader?name=[name].[ext]&scalings[@2x]=2&scalings[-3x]=3',
      },
      {
        test: /\.(?:woff2?|ttf|eot|svg)(?:\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  resolve: {
    // Maps the 'react-native' import to 'react-native-web'.
    alias: {
      'react-native': 'react-native-web',
      '@storybook/react-native': '@storybook/react',
    },
    extensions: ['.web.js', '.js'],
  },
};
