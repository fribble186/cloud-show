//app.js
var API = require('/api/api.js');
var CONFIG = require('/api/config.js');

App({
  globalData: {
    front_version: 'V1.0',
    device: {},
    location: {},
    log: {},
    userInfo: {
      token: '',
      openId: ''
    }
  },

  onLaunch: function () {
    console.info('当前处于' + CONFIG.CONST.environment + '环境')

    this.globalData['loginPromise'] = () => new Promise((resolve, reject) => {
      if (this.globalData.userInfo.token) {
        console.info('已有token' + this.globalData.userInfo.token)
        resolve()
        return
      }
      wx.showLoading({ title: '登录中...' })
      wx.login({
        success: (res) => {
          console.log("success in wxlogin", res)
          let data = { auth_code: res.code }
          wx.getUserInfo({
            withCredentials: true,
            success: (res) => {
              data['encryptedData'] = res.encryptedData
              data['iv'] = res.iv
              API.user_login(data).then((data) => {
                if (data) {
                  console.info('获取新token' + this.globalData.userInfo.token)
                  this.globalData.userInfo.token = data.token
                  this.globalData.userInfo.openId = data.openId
                  this.globalData.userInfo.phoneNumber = data.phoneNumber
                  wx.hideLoading()
                  resolve(data)
                }
                else reject(data)
              })
            },
            fail: (res) => reject(res)
          })
        },
        fail: (res) => reject(res)
      })
    })
  }
})