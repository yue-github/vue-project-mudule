/* eslint-disable no-mixed-spaces-and-tabs */
module.exports={
	baseUrl:"/",
	publicPath:'./',
	outputDir:"dist2",
	assetsDir:"assets",
	lintOnSave:false,
	devServer: {
		open: true,
		host: 'localhost',
		port: '8081',
		https: false,
		hotOnly: false,
		proxy: {
		  // 配置跨域
		  '/apis': {
			target: 'http://www.zzzjedu.com',
			ws: true,
			changeOrigin: true,
			pathRewrite: {
			  '^/apis': ''
			}
		  }
		}
	  }
}