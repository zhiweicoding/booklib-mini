/* eslint-disable import/no-commonjs */
// var apiUrl = 'http://127.0.0.1:8081/';
var apiUrl = 'https://www.youchongxiong.com/'

module.exports = {
  cateQuery: apiUrl + 'product/cate/index',
  add: apiUrl + 'product/cate/add',
  modNum: apiUrl + 'product/coll/modNum',
  oQuery: apiUrl + 'product/o/query',
  qRefund: apiUrl + 'orderRefund/q',
  sendRefund: apiUrl + 'orderRefund/rr',
  oDel: apiUrl + 'product/o/del',
  searchDel: apiUrl + 'product/sp/del',
  searchIndex: apiUrl + 'product/sp/i',
  searchQuery: apiUrl + 'product/sp/q',

  smsSend: apiUrl + 'product/people/sms', 
  phoneBind: apiUrl + 'product/people/bind', 
  refresh: apiUrl + 'product/people/refresh', 
  memberList: apiUrl + 'product/people/list', 
  
  orderNum: apiUrl + 'product/o/num', 
  noticeChange: apiUrl + 'product/o/noticeChange', 
  AddCollege: apiUrl + 'good/addCollege', //新的加入购物车
}