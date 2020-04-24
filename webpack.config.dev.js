import path from 'path';

export default {
  debug: true, // set for debugging
  devtool: 'inline-source-map', // source mapping file for fast rendering
  noInfo: false,
  entry: [
    path.resolve(__dirname, 'src/index') // entry points can be added as array also
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'src'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [],
  module: { // file type that needs to be handled in distinct way
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
