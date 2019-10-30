const path = require('path');

	module.exports = (env) =>	 {
		return {
			entry: './src/index.js',
			output: {
				path: path.join(__dirname, 'public'),
				filename: 'main.js'
			},
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
			devServer: {
				contentBase: path.join(__dirname, "public"),
				historyApiFallback: true,
			}
		};
	};