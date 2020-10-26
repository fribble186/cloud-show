var config = require('config.js')
var request = require('../utils/request.js')
var app = getApp()
var domain = config.CONST.domain

var get_portfolio = p_id =>
  p_id
  ? request.request_get(domain + 'portfolio/', {p_id}).then(data => data)
  : request.request_get(domain + 'portfolio/').then(data => data)

export {
  get_portfolio,
}