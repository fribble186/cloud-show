var request = require('../utils/request.js')

var CONST = {
  environment: 'uat',
  domain: 'https://www.fribble186.cn/api/exhibition/'
}
if (CONST.environment == 'dev') CONST.domain = 'http://127.0.0.1:8000/api/exhibition/'
export { CONST }