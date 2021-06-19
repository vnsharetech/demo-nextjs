module.exports = {
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    config.plugins.push(new webpack.IgnorePlugin(/\.test.js$/));
    config.plugins.push(new webpack.IgnorePlugin(/test.js$/));

    // Important: return the modified config
    if (dev) {
      config.devtool = 'cheap-module-source-map';
    }
    return config;
  },
};
