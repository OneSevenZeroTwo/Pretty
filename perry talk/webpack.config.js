module.exports ={
	devtool:'source-map',
	// 导入
	 entry: __dirname + '/app/main.js',
	//导出
	output:{
		filename:'storll.js',
		path: __dirname + "/public"
	},
	// vue
	resolve:{
		alias:{
			'vue':'vue/dist/vue.js'
		}
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
		}]
	},
	// 服务器
	devServer:{
		contentBase:'./public',
		inline:true
	}
		
}