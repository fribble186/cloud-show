//index.js
//获取应用实例
const app = getApp()
var API = require("../../api/api.js")

Page({
  data: {

  },
  //事件处理函数
  onLoad(){
  },

  go2me() {
    wx.navigateTo({
      url: '/pages/me/me',
    })
  },

  onShow(){

  },

  onShareAppMessage: function () {
    return {
      title: '无聊的摄影展',
      path: '/pages/index/index',
      success: function (res) { }
    }
  }
})
