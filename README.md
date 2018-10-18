# React Udemy

> React Udemy 源码

## Table of Contents

* [create react app](#create-react-app)
* [radium](#radium)
* [css module](#css-module)
* [prop-types](#prop-types)
* [react developer tools](#react-developer-tools)
* [Http](#Http)
* [Router](#Router)
* [Redux](#Redux)
* [Build](#Build)
* [Webpack 目前没有运行起来](#Webpack)


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

## prop-types
```cmd
npm install --save prop-types
```

## react developer tools
谷歌搜一下就可以了

## Http
```cmd
npm install axios --save
```

## Router
```cmd
npm install --save react-router-dom
```

react-router可以不用安装
```cmd
npm install --save react-router
```

## Redux
```cmd
npm install --save redux react-redux redux-thunk
```

## Build
```cmd
npm run build
```

## Webpack
```cmd
npm init
npm install --save-dev webpack webpack-dev-server
npm install --save react react-dom react-router-dom
npm install --save-dev babel-loader babel-core babel-preset-react babel-preset-env babel-plugin-syntax-dynamic-import babel-preset-stage-2
npm install --save-dev css-loader style-loader postcss-loader url-loader file-loader autoprefixer
npm install --save-dev html-webpack-plugin
npm install --save-dev rimraf
```

[url1]: https://github.com/facebook/create-react-app