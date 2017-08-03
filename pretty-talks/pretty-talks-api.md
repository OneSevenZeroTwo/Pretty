## Pretty Talks Api 快速入门

### http请求地址（测试使用）  http://localhost:999

####首页首页接口
|路由|使用位置|参数|类型|支持格式|请求方式|数据分析|
|-|-|-|-|-|-||-|
|/home|首页的商品列表|page,sort|number,string|json|get||
|/active|首页活动|无|无|json|get|```obj['43542']:轮播图数据,obj['13730']:9.9包邮活动 obj['42287']:限时秒杀活动```|
|/well|好物组货|无|无|json|get||
|/seek|搜索功能|title|string|json|get||
|/liseek|返回模糊搜索的列表|title,sort,page|string,string,number|json|get||

####列表页
|路由|使用位置|参数|类型|支持格式|请求方式|数据分析|
|-|-|-|-|-|-||-|
|/fsort|第一层分类|无|无|json|get||
|/tsort|第二层分类|pid|string|json|get||
|/choose|根据子分类分类进入列表页|fcid|string|json|get||

####详情页
|路由|使用位置|参数|类型|支持格式|请求方式|数据分析|
|-|-|-|-|-|-||-|
|/main|商品详情|iid|string|json|get||
|/man|热门商品||string|json|get|判断返回的参数中hot字段中的值，1为热门，0为非热门|
|/discuss|商品评论|iid|string|json|get||
|/collect|收藏商品|id,iid|num,string|json|get||
|/addcar|加入购物车|imgUrl, title, color, size, num, price, origin_price,user_id,orders|```string,string,string,string,string,string,string,string,string```|json|get||

####个人中心
|路由|使用位置|参数|类型|支持格式|请求方式|数据分析|
|-|-|-|-|-|-||-|
|/reg|注册|phone,password|string,string|get|num|后端返回1是则该用户已存在数据库被注册，返回0则注册成功|
|/login|登录|username或phone或email,password|string,string|get|json||
|/orders|个人订单|id|number|json|get||
|/orders|个人订单|id|number|json|get||

####购物车
|路由|使用位置|参数|类型|支持格式|请求方式|数据分析|
|-|-|-|-|-|-||-|
|/read|获取购物车信息|user_id|string|json|get||
|/writeNum|修改商品数量|num,id|number,number|get|string||
|/writeOrder0|修改订单状态|无|无|get|string||
|/delete|删除购物车列表|id|num|get|string||
|/setAddr|添加收货地址|user_id,user_name,addressUser,addressPhone,addressPname,addressCname,addressDname,addressStreet,addressPostcode,isDefault|全为string。。。|get|string||
|/getOrderAddr|读取收货地址|user_id|string|get|json||
|/modifyAddr|修改收货地址|user_id,user_name,addressUser,addressPhone,addressPname,addressCname,addressDname,addressStreet,addressPostcode,isDefault|string|get|json||
|/isnomodifyAddr|清除默认地址|无|无|get|string||
|/ismodifyAddr|设置默认地址|无|无|get|string||
|/delAddr|删除收货地址|无|无|get|string||