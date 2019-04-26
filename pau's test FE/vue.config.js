const webpack = require('webpack')
module.exports = {
	chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
	pluginOptions: {
		i18n: {
			enableInSFC: true
		}
	},
	configureWebpack: {
		plugins: [
			new webpack.ProvidePlugin({
				$: 'jquery',
				'$': 'jquery',
				jquery: 'jquery',
				jQuery: 'jquery',
				'window.jquery': 'jquery',
				'window.jQuery': 'jquery',
				'window.$': 'jquery',
				'global.jquery': 'jquery',
				'global.jQuery': 'jquery',
				'global.$': 'jquery'
			}),
		]
	},
}
