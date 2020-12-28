const express = require('express')
const { PerformanceObserver, performance } = require('perf_hooks');
const serverLog = require('./functions')
const app = express()
const port = 3000

let processStart = ''
let performanceStart = ''

app.use((req, res, next) => {
  console.time('total time => console.time/timeEnd')
  processStart = process.hrtime.bigint()
  performanceStart = performance.now()
  req.headers['requestReceivedTime'] = Date.now()
  // console.log("req.headers['requestReceivedTime']: ", new Date(req.headers['requestReceivedTime'])) 
  // console.log("performance.timeOrigin: ", new Date(performance.timeOrigin))
  return next()
})

app.get('/', (req, res) => {
  serverLog(new Date(req.headers['requestReceivedTime']), processStart, req, performanceStart, performance) 
  res.send(`列出全部 Todo
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
  console.log('===========next request=================')
})

app.get('/new', (req, res) => {
  serverLog(new Date(req.headers['requestReceivedTime']), processStart, req, performanceStart, performance)
  res.send(`新增 Todo 頁面
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
  console.log('===========next request=================')
})
 
app.get('/:id', (req, res) => {
  serverLog(new Date(req.headers['requestReceivedTime']), processStart, req, performanceStart, performance)
  res.send(`顯示一筆 Todo
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
  console.log('===========next request=================')
})

app.post('/', (req, res) => {
  serverLog(new Date(req.headers['requestReceivedTime']), processStart, req, performanceStart, performance)
  res.send(`新增一筆  Todo
    <a href="/">列出全部 Todo</a>
    <a href="/new">新增 Todo 頁面</a>
    <a href="/id">顯示一筆 Todo</a>
    <form action="/" method="POST">
      <button type="submit">新增一筆  Todo</button>
    </form>
  `)
  console.log('===========next request=================')
})

app.listen(port, () => {
  console.log(`The server is running on http://localhost:${port}.`)
})