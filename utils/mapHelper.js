var app = getApp()
var QQMapWX = require('../lib/qqmap-wx-jssdk.js');
var qqmapsdk = new QQMapWX({
  key: 'KVGBZ-65CW4-MVZUR-DDHS6-ZNU52-YEBEC'
  //key: 'JKDBZ-OZYKK-B22JH-ACDLW-AGXE5-4RB4K'
});
var get_suggestion_by_keyword = (keyword) => new Promise((resolve,reject)=>{
  qqmapsdk.getSuggestion({
    keyword,
    region: app.globalData.location.province.substring(0,2),
    success: res => resolve(res.data),
    fail: err => console.error(err)
  });
})

var get_province_by_geocoder = (location) => new Promise((resolve,reject)=>{
  qqmapsdk.reverseGeocoder({
    location,
    success: res => resolve(res.result.address_component.province),
    fail: err => console.log(err)
  })
})

export {
  get_suggestion_by_keyword,
  get_province_by_geocoder
}