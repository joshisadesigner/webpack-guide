const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            /**
             * Add css loaders otherwhise wont work
             */
            /**
             * When style-loader is used with
             * { options: { sourceMap: true } } option,
             * the CSS modules will be generated as Blobs
             */
            options: { sourceMap: true },
          },
          {
            loader: 'css-loader',
            /**
             * When style-loader is used with
             * { options: { sourceMap: true } } option,
             * the CSS modules will be generated as Blobs
             */
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.(jpg|png|gif|svg)$/,
        use: [
          {
            /**
             * Return a Data URL if the file is smaller than byte limit
             * Fallback default 'file-loader'
             */
            loader: 'url-loader',
            options: {
              limit: 50000,
            },
          },
        ],
      },
    ],
  },
};
