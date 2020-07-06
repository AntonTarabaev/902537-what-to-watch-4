const path = require('path');
const webpack = require('webpack');

module.exports = (env) => {
  return {
    mode: env.type,
    entry: './src/index.jsx',
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
      historyApiFallback: true,
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
        '@components': path.resolve(__dirname, './src/components'),
        '@utils': path.resolve(__dirname, './src/utils'),
        '@constants': path.resolve(__dirname, './src/constants'),
      },
      extensions: ['*', '.js', '.jsx']
    }
  };
};
