/**
* @description: 工具类js
* @author: fribble(psj124@qq.com)
*/


var getLocation = () => new Promise((resolve, reject) => {
  wx.getLocation({
    type: 'gcj02',
    success: (res) => resolve(res),
    fail: (res) => {
      let errcode
      if (res.errMsg.indexOf("ERROR_NOCELL&WIFI_LOCATIONSWITCHOFF") != -1)
        errcode = 0
      if (res.errMsg.indexOf("fail auth deny") != -1)
        errcode = 1
      reject(errcode)
    }
  })
})

var locationToast = (errcode) => new Promise((resolve, reject) => {
  if (!errcode) errcode = 0
  wx.showModal({
    title: '未能获取位置',
    content: errcode == 0 ? "手机设置中没有开启位置" : "小程序设置中没有开启位置",
    confirmText: '再试一次',
    cancelText: '随便看看',
    success(res) {
      if (errcode == 0 && res.confirm) resolve()
      else if (errcode == 1 && res.confirm) {
        wx.openSetting({ success: () => resolve() })
      }
      else if (res.cancel) reject()
    }
  })
})

var setLocation = () => new Promise((resolve,reject)=>{
  getLocation()
    .then(data => resolve(data))
    .catch(errcode => locationToast(errcode)
      .then(() => setLocation().then(data=>resolve(data)))
      .catch(()=>reject()))
})

export {
  setLocation
}
