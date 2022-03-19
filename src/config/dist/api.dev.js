"use strict";

/* eslint-disable import/no-commonjs */
// var apiUrl = 'http://127.0.0.1:8081/';
var apiUrl = 'https://www.youchongxiong.com/'; // var apiUrl = 'https://www.myloveqian.cn/';

module.exports = {
  IndexUrl: apiUrl + 'home/cat',
  //首页数据接口
  ProdutSingle: apiUrl + 'product/single',
  //获取详情页数据
  DetailGoodUrl: apiUrl + 'good/detailQuery',
  //详细页数据接口
  SpecDetailGoodUrl: apiUrl + 'specGood/detailQuery',
  //详细页数据接口
  detailQueryArray: apiUrl + 'good/detailQueryArray',
  //详细页数据接口
  ModifyGoodUrl: apiUrl + 'good/modifyGoodLike',
  //详细页数据接口
  CatalogList: apiUrl + 'catalog/catQuery',
  //分类数据接口
  SearchIndex: apiUrl + 'search/indexQueryV2',
  //搜索页面数据
  SearchHelper: apiUrl + 'search/helpQuery',
  //搜索帮助
  SearchResult: apiUrl + 'search/redirectQueryV2',
  //搜索数据
  SearchResultV3: apiUrl + 'search/redirectQueryV3',
  //搜索数据
  ClearHis: apiUrl + 'search/clearHis',
  //删除历史记录
  AuthLoginByWeixin: apiUrl + 'auth/getOpenId',
  //微信登录
  TTSendCode: apiUrl + 'ttLogin/sendCode',
  //tt
  TTUserLogin: apiUrl + 'ttLogin/userLogin',
  //tt
  GoodsList: apiUrl + 'goods/list',
  //获得萌宠列表
  OrderSubmit: apiUrl + 'order/createOrder',
  // 提交订单
  OrderSubmitVersion1: apiUrl + 'order/createOrderV1',
  // 提交订单
  createOrderForBargain: apiUrl + 'order/createOrderForBargain',
  // 提交订单
  PayPrepayId: apiUrl + 'payBridge/getOrder',
  //微信支付定金
  PayPrepayIdV1: apiUrl + 'payBridge/getOrderV1',
  //微信支付定金V1
  PayPrepayOneStepId: apiUrl + 'payBridge/oneStep',
  //微信支付定金
  PayPrepayOneStepIdV1: apiUrl + 'payBridge/oneStepV1',
  //微信支付定金
  PayPrepayMember: apiUrl + 'payBridge/member',
  //微信支付会员
  PaySecondMoney: apiUrl + 'payBridge/paySecondMoney',
  //微信支付尾款
  SwanPayFirst: apiUrl + 'swanPayBridge/first',
  //swan支付定金
  SwanPaySecond: apiUrl + 'swanPayBridge/second',
  //swan支付尾款
  AliPayBridge: apiUrl + 'aliPayBridge/prePay',
  //支付宝支付定金
  AliPayBridgeSecond: apiUrl + 'aliPayBridge/prePaySecond',
  //支付宝支付尾款
  AliPayBridgeStep: apiUrl + 'aliPayBridge/prePayStep',
  //支付宝一步支付
  AliPayBridgeMember: apiUrl + 'aliPayBridge/member',
  //支付宝支付会员
  CreateOrderInsurance: apiUrl + 'payBridge/createOrderInsurance',
  //获取微信统一下单prepay_id
  CollectList: apiUrl + 'collect/list',
  //收藏列表
  CollectDelete: apiUrl + 'collect/delete',
  //取消收藏
  AddressList: apiUrl + 'address/list',
  //收货地址列表
  AddressPayList: apiUrl + 'address/payList',
  //收货地址列表
  AddressDetail: apiUrl + 'address/detail',
  //收货地址详情
  AddressSave: apiUrl + 'address/save',
  //保存收货地址
  AddressDelete: apiUrl + 'address/delete',
  //保存收货地址
  AddressOrder: apiUrl + 'order/addAddress',
  //修改order中的address信息
  RegionList: apiUrl + 'address/getRegionList',
  //获取区域列表
  OrderList: apiUrl + 'order/list',
  //订单列表
  RecordList: apiUrl + 'record/list',
  //订单列表
  BuyServiceStatus: apiUrl + 'buyService/getStatus',
  //获取服务状态
  BuyServiceSavePhone: apiUrl + 'buyService/savePhone',
  //保存手机号码
  BuyServiceGetList: apiUrl + 'buyService/getList',
  //获取协议列表
  BuyServicePrepay: apiUrl + 'buyService/prePay',
  //预支付
  BuyServiceIndexList: apiUrl + 'buyService/indexList',
  BuyServiceModUsed: apiUrl + 'buyService/modUsed',
  OpinionSend: apiUrl + 'opinion/add',
  //上传意见
  QueryProtectMsg: apiUrl + 'protect/getProtect',
  //获取协议内容
  SignProtect: apiUrl + 'protect/signProtect',
  //签署协议
  SaveMobile: apiUrl + 'protect/addUserMobile',
  //签署协议界面添加手机号码
  ShopIndex: apiUrl + 'shop/index',
  // shop index
  ChangeCollectShop: apiUrl + 'shop/changeCollectShop',
  //ChangeCollectShop
  ConfigIndex: apiUrl + 'config/findCat',
  //
  ConfigIndexAlipay: apiUrl + 'config/findAlipay',
  //
  GetBdConfig: apiUrl + 'config/baidu',
  ship: apiUrl + 'order/ship',
  //
  MakeThree: apiUrl + 'order/makeThree',
  //
  refunding: apiUrl + 'order/refunding',
  //refunding
  activityQuery: apiUrl + 'activity/query',
  //adopt
  activityQueryV2: apiUrl + 'activity/queryV2',
  //adopt
  bargainQueryList: apiUrl + 'bargain/queryList',
  //queryList
  bargainDetail: apiUrl + 'bargain/detail',
  bargainCutByOther: apiUrl + 'bargain/cutByOther',
  //bargainCutByOther
  confirmOrder: apiUrl + 'payBridge/confirmOrder',
  //confirmOrder
  sendGoodForDetail: apiUrl + 'good/sendGoodForDetail',
  //sendGoodForDetail
  LoadComment: apiUrl + 'comment/load',
  //loadCommentData
  BaiduGetSessionKey: apiUrl + 'auth/baiduGetOpenId',
  //百度登陆
  AlipayLogin: apiUrl + 'aliLogin/userLogin',
  MsgIndex: apiUrl + 'news/index',
  QueryShopInfo: apiUrl + 'shopInfo/qbId',
  EvaluateQuery: apiUrl + 'opinionV2/query',
  EvaluateAdd: apiUrl + 'opinionV2/add',
  AddNews: apiUrl + 'news/addNews',
  GetQiuniuToken: apiUrl + 'news/QiniuUpToken',
  RecordPage: apiUrl + 'recordPage/start',
  //记录跳转页面
  RecordLogin: apiUrl + 'recordLogin/start',
  //记录登陆记录
  RecordClick: apiUrl + 'click/any',
  //记录登陆记录
  CouponList: apiUrl + 'couponCenter/array',
  //收藏列表
  CouponActive: apiUrl + 'couponCenter/active',
  //取消收藏
  ShareBaseInfo: apiUrl + 'share/baseInfo',
  //送好友基本信息
  ShareInitCoupon: apiUrl + 'share/initCoupon',
  //获取优惠券ID
  ShareGetCoupon: apiUrl + 'share/getCoupon',
  //领取优惠券
  GetFilterSymbol: apiUrl + 'catalog/getSymbol',
  //分享界面筛选
  SellerGood: apiUrl + 'specGood/sellerDel',
  //销售删除数据
  BargainCatInfo: apiUrl + 'bargainCat/info',
  //砍罐头
  BargainCatCut: apiUrl + 'bargainCat/cut',
  //砍
  BargainCatChosenAdd: apiUrl + 'bargainCat/chosenAdd' //砍

};