var app = getApp();
var MAX_LOG_LENGTH = 10

var print = (sentence) => {
  console.info('logger:' + sentence)
  if (!app.globalData.log['loglist']) app.globalData.log['loglist'] = [sentence]
  else if (app.globalData.log['loglist'].length < MAX_LOG_LENGTH) app.globalData.log['loglist'].push(sentence)
  else {
    app.globalData.log['loglist'].shift()
    app.globalData.log['loglist'].push(sentence)
  }
}

var report = () => {
  let data = {
    'token': app.globalData.userInfo.token || 'guest',
    'logger_list': app.globalData.log.loglist || '无前继log记录'
  }
  wx.request({
    header: { 'content-type': 'application/x-www-form-urlencoded' },
    url: 'https://www.hmjieyun.com/parking/send_error_mail/',
    method: 'POST',
    data: data,
    success: () => console.log('send success'),
    fail: () => console.log('send fail')
  })
}

export {
  print,
  report
}