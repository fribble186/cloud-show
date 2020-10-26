//index.js
//获取应用实例
const app = getApp()
var API = require("../../api/api.js")

Page({
  data: {
    portfolio: [],
    show: false,
    desc: ""
  },
  //事件处理函数
  onLoad(){
    API.get_portfolio().then(data=>{
      this.setData({portfolio: data.data})
    })
  },

  go2detail(e) {
    console.log(e)
    wx.navigateTo({
      url: '/pages/detail/detail?p_id='+e.currentTarget.dataset.id,
    })
  },

  showDesc(e) {
    this.setData({desc: e.currentTarget.dataset.desc, show: true})
  },

  hideDesc() {
    this.setData({show: false})
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
