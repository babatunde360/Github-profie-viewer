
module.exports = {
     entry: './src/app.js',
     output: {
        // path: './bin',
         path:__dirname,
         filename:'app/js/main.js'
        // filename: 'app.bundle.js',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
           // query: {
           //     presets: ['es2015']
         //   }
        }]
     }
 }