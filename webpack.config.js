const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    mode: env.type,
    entry: './src/index.js',
    output: {
      filename: 'bundle.js',
      path: path.join(__dirname, 'public')
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      open: true,
      inline: true,
      hot: true,
      port: 1337,
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
          },
        }
      ],
    },
    plugins: [
      new webpack.ProvidePlugin({
        React: 'react',
        PropTypes: 'prop-types',
      }),
    ],
    devtool: env.devtool,
    resolve: {
      alias: {
        '@root': path.resolve(__dirname, './src'),
      },
      extensions: ['*', '.js', '.jsx']
    }
  };
};