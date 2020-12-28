Middleware practice
===
可印出每個請求包含的方法、路徑、接收請求時間、請求到回覆的時間。<br> 

prerequisites
================

## global packages

1. Node.js: v10.15.0 
2. nodemon: v2.0.6
3. npm: v6.4.1

## local packages

可於專案的 `package.json` 中查閱 `dependencies` 部分。<br> 

## database related

1. mongoDB: v4.2.11
2. Robo 3T: v1.4.2

installation and execution
=======

指令部分可參閱 `package.json` 中查閱 `scripts` 部分。<br> 

1. clone 這個專案，在終端機輸入:
```
git clone https://github.com/Jackson162/middleware-practice.git
```
2.  進入專案根目錄，安裝本地套件 (local packages)，在終端機輸入: 
```
npm install
```
3. 啟動伺服器，執行專案:
```
npm run dev
```
4. 打開瀏覽器，搜尋:
```
http://localhost/3000
```
