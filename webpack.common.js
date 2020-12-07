module.exports = {
  entry: {
    main: './src/app/index.js',
    vendor: './src/app/vendor.js',
  },
  module: {
    rules: [
      {
        test: /\.(svg|png|jpg|gif|webp)$/,
        use: {
          loader: 'file-loader',
          options: {
            name: '[name].[hash].[ext]',
            outputPath: 'imgs',
          },
        },
      },
      {
        test: /\.html$/,
        use: ['html-loader'],
      },

    ],
  },
};
