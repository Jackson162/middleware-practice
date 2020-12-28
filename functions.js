function serverLog(req, event, reqTime, processStart, processEnd) {
  const date = `${reqTime.getFullYear()}-${reqTime.getMonth() + 1}-${reqTime.getDate()}`
  const specificTime = `${reqTime.getHours()}:${reqTime.getMinutes()}:${reqTime.getSeconds()}:${reqTime.getMilliseconds()}`
  const methodAndUrl = `${req.method} from ${req.url}`
  const totalTime = `${Number(processEnd - processStart)/10**6}ms`
  console.log(`[${event}] ${date} ${specificTime} | ${methodAndUrl} | total time: ${totalTime}`)
}

module.exports = serverLog