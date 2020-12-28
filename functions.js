// const { PerformanceObserver, performance } = require('perf_hooks');

function serverLog(time, processStart, req, performanceStart, performance) {
  console.timeEnd('total time => console.time/timeEnd')
  console.log(`total time => process.hrtime.bigint(): ${Number(process.hrtime.bigint() - processStart)/10**6}ms`)
  console.log(`total time => performance.now(): ${performance.now() - performanceStart}ms`)
  console.log(`${time.getFullYear()}-${time.getMonth() + 1}-${time.getDate()} ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}:${time.getMilliseconds()} | ${req.method} from ${req.url} | total time => Date.now(): ${Date.now() - req.headers.requestReceivedTime}ms`)
}

module.exports = serverLog