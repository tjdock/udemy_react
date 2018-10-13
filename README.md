# React Udemy

> React Udemy 源码

## Table of Contents

* [create react app](#create-react-app)
* [radium](#radium)
* [css module](#css-module)


## create react app

[github地址][url1]

安装
```cmd
npm install -g create-react-app
```

创建项目并运行
```cmd
create-react-app PROJECT_NAME
npm start
```

## radium
```cmd
npm install --save radium
```

## css module
```cmd
npm run eject
```

config/webpack.config.xxx.js加入这段代码
```js
options: {
  importLoaders: 1,
  modules:true,
  localIdentName:'[name]__[local]__[hash:base64:5]'
},
```



[url1]: https://github.com/facebook/create-react-app