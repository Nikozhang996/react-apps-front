# react-typescript-music

React 框架生态 app 集合

## 1: 笔记

## 2：logs

### 2-1. react-router 嵌套路由 request bundle.js 错误

原因：publicPath 中未设置`/`，导致 pathname 识别为`demo/xxx`，此时请求`demo/xxx/bundle.js`时报错

- https://stackoverflow.com/questions/63592478/react-router-v4-v5-v6-nested-routing-404-neterr-aborted-404
