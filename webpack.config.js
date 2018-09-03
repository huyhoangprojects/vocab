const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require('path');

	module.exports = {
	  module: {
	    rules: [
	      {
	        test: /\.(js|jsx)$/,
	        use: ['babel-loader'],
	        exclude: /node_modules/,
	      },
	      {
	        test: /\.(scss|css)$/,
	        use: [{
	          loader: "style-loader" // creates style nodes from JS strings
	        }, {
	          loader: "css-loader" // translates CSS into CommonJS
	        }, {
	          loader: "sass-loader" // compiles Sass to CSS
	        }]
	      },
	      {
	        test: /\.(jpe?g|png|gif|svg|ttf|eot|woff|woff2)$/i,
	        use: [
	          {
	            loader: 'file-loader',
	          },
	        ]
	      }
	    ]
	  },
	  plugins: [
	    new HtmlWebPackPlugin({
	      template: "./public/index.html",
	      filename: "./index.html"
	    })
	  ],
	  devServer: {
	    contentBase: path.join(__dirname, "public"),
	    compress: true,
	    port: 8000
	  }
	};