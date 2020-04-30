已安装`react-router-dom`,`react-app-rewired`,`customize-cra`,`redux`,`axios`,`pubsub.js`这些额外包。  
> 每次`git pull`的时候可能需要输入`npm install`重新配置才能`npm start`
# 路由
````
|- /register (注册)  
|- /administrator (管理员页面，根据cookie内是否有id动态出现，进去后会进行身份判断)
|  |- /administrator/user (用户)
|  |- /administrator/order (订单)
|  |- /administrator/works (作品)
|  |- /administrator/collection (收藏)
|  |- /administrator/message (公告)
|  |- /administrator/ad (广告)
|  |- /administrator/signed (签到)
|  |- /administrator/service (问题反馈)
|  |- /administrator/business (业务)
|- /404 (404页面)
|- /personal/用户id (个人页面，根据cookie内是否有id动态出现)
|  |- /personal/用户id/attendanceSheet (签到表)
|  |- /personal/用户id/message (公告)
|  |- /personal/用户id/collection (收藏)
|  |- /personal/用户id/order (订单)
|  |- /personal/用户id/management (个人设置)
|- / (官网主页)
|  |- /main (首页)
|  |- /visit (走进新叶)
|  |  |- /visit/news (动态资讯)
|  |  |- /visit/introduction (工作室简介)
|  |  |- /visit/join (加入我们)
|  |- /show (案例展示)
|  |  |- /show/works (案例作品)
|  |  |- /show/PreviousWebsite (往届官网)
|  |  |- /show/PreviousOffice (往届工作室)
|  |- /business (主要业务)
|  |- /service (联系我们)
````
# 未做完的任务
+ banner获取也没写（好像获取不到）全康
+ 返回全部信息没有签到时长
+ 返回订单没有业务类型
+ 作品没有做上传图片和删除，而且设计稿内没有添加作品
+ 收藏无接口
