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

  go2list() {
    wx.navigateTo({
      url: '/pages/list/list',
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
