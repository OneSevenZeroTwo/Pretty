module.exports ={
	devtool:'source-map',
	// 导入
	 entry: __dirname + '/app/main.js',
	//导出
	output:{
		filename:'storll.js',
		path: __dirname + "/public"
	},
	// 加载器
	module: {
		loaders:[{
			test: /\.css$/,
			loader: "style-loader!css-loader"
		},{
			test:/\.html$/,
			loader:"html-loader"
		},{
			test:/\.(jpg|png|jpeg|gif)$/,
			loader:"url-loader"
		},{
			// es6转es5
			test:/\.js$/,
			loader:"babel-loader"
		},{
			test: /\.vue$/,
			loader: "vue-loader"
		}, {
			//字体图标
			test: /\.(woff|svg|eot|ttf)\??.*$/,
			loader: "url-loader?name=fonts/[name].[md5:hash:hex:7].[ext]"
		}]
	},
	// vue
	resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
	},
	// 服务器
	devServer:{
		contentBase:'./public',
		inline:true
	}
		
}