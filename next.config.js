const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  webpack: (config, { dev }) => {
    
    config.module.rules.push({
      test: /\.less/,
      // loader: 'style-loader!css-loader!less-loader'
      use: ['style-loader', 'css-loader', 'less-loader']
    });
    config.module.rules.push({
      test: /\.css$/,
      // loader: 'style-loader!css-loader'
      use: ['style-loader', 'css-loader']
    });
    // config.plugins.push(new ExtractTextPlugin("static/styles/[name].css"));
    // Important: return the modified config
    return config;
  }
}