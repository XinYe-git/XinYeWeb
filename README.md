已安装`react-router-dom`,`react-app-rewired`,`customize-cra`,`redux`,`axious`这些额外包。  
> 每次`git pull`的时候可能需要输入`npm install`重新配置才能`npm start`
# 路由
+ /main:主页（基本完成）
+ /visit：走进新叶
+ /show:实例展示
+ /business：主要业务
+ /service：联系我们
+ /register：注册
+ /.../signIn：登录（该路由直接在url后添加signIn，判断函数已经写好,在`src\components\header\regButton\index.jsx`）
> 二级路由自己命名,点击一级路由自动跳转到二级路由的第一个（此时登录路由的判断可能出错，自行修改）