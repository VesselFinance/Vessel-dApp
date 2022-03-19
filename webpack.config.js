var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: {
		pageOne: './src/components/DappPages/Home',
		pageTwo: './src/components/DappPages/Epoch'
	},

	mode: 'development',
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		}),
		@babel/preset-react
	],
	devServer: {
		historyApiFallback: true,
	},
	externals: {
		// global app config object
		config: JSON.stringify({
			apiUrl: '/api',
		}),
	},
};
