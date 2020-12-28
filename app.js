const express = require('express')
const serverLog = require('./functions')
const { PerformanceObserver, performance } = require('perf_hooks');
const app = express()
const port = 3000



app.use((req, res, next) => {
  const processStart = process.hrtime.bigint()
  req.headers['requestReceivedTime'] = new Date(Date.now())
  
  res.on('finish', () => {
    serverLog(req, 'finish', req.headers['requestReceivedTime'], processStart)
  })

  res.on('close', () => {
    serverLog(req, 'close', req.headers['requestReceivedTime'], processStart)
  })
  return next()
})

app.get('/', (req, res) => { 
  res.send(`列出全部 Todo
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
})

app.get('/new', (req, res) => {
  res.send(`新增 Todo 頁面
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
})
 
app.get('/:id', (req, res) => {
  res.send(`顯示一筆 Todo
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
})

app.post('/', (req, res) => {
  res.send(`新增一筆  Todo
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}.`)
})