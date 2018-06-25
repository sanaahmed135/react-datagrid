config = {
    entry: __dirname +  "./src/index.js",
    output: {
        path: __dirname + "./src/build",
        filename: "bundle.js",
    },
	
   devServer: {
      inline: true,
      port: 3000
   },
	
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['react','env']
            }
         }
      ]
   }
}
 
module.exports = config;