//index.js
//获取应用实例
const app = getApp()
var API = require("../../api/api.js")

Page({
  data: {
    portfolio: {
      desc:"",
      name:"",
      photo_portfolio: []
    },
    urls: []
  },
  //事件处理函数
  onLoad(options){
    API.get_portfolio(options.p_id).then(data=>{
      this.setData({portfolio: data.data})
      let urls = []
      for (let item of data.data.photo_portfolio)
      urls.push(item.source)
      this.setData({urls})
    })
  },

  goBack() {
    wx.navigateBack()
  },

  preview(e) {
    var current=e.currentTarget.dataset.src;
    console.log(e, this.data.urls)
    wx.previewImage({
      urls: this.data.urls,
      current: current
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
