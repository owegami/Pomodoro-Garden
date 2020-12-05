const path = require('path');
const source = path.join(__dirname, '/client');
const outputSource = path.join(__dirname, '/public');

module.exports = {
  entry: `${source}/index.jsx`,
  mode: "development",
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  output: {
    path: outputSource,
    filename: 'bundle.js'
  },
  module: {
    rules: [{
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
      {
        test: /\.jsx?/,
        include: source,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          query: {
            presets: [
                "@babel/preset-react",
                "@babel/preset-env"
            ]
          }
        }
    }]
  }
};