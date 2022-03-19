"use strict";

/* eslint-disable import/no-commonjs */
// var apiUrl = 'http://127.0.0.1:8081/';
var apiUrl = 'https://www.youchongxiong.com/';
// var apiUrl = 'https://www.myloveqian.cn/';

module.exports = {
  IndexUrl: "https://www.youchongxiong.com/home/cat", //首页数据接口
  ProdutSingle: "https://www.youchongxiong.com/product/single", //获取详情页数据
  DetailGoodUrl: "https://www.youchongxiong.com/good/detailQuery", //详细页数据接口
  SpecDetailGoodUrl: "https://www.youchongxiong.com/specGood/detailQuery", //详细页数据接口
  detailQueryArray: "https://www.youchongxiong.com/good/detailQueryArray", //详细页数据接口
  ModifyGoodUrl: "https://www.youchongxiong.com/good/modifyGoodLike", //详细页数据接口
  CatalogList: "https://www.youchongxiong.com/catalog/catQuery", //分类数据接口

  SearchIndex: "https://www.youchongxiong.com/search/indexQueryV2", //搜索页面数据
  SearchHelper: "https://www.youchongxiong.com/search/helpQuery", //搜索帮助
  SearchResult: "https://www.youchongxiong.com/search/redirectQueryV2", //搜索数据
  SearchResultV3: "https://www.youchongxiong.com/search/redirectQueryV3", //搜索数据
  ClearHis: "https://www.youchongxiong.com/search/clearHis", //删除历史记录

  AuthLoginByWeixin: "https://www.youchongxiong.com/auth/getOpenId", //微信登录
  TTSendCode: "https://www.youchongxiong.com/ttLogin/sendCode", //tt
  TTUserLogin: "https://www.youchongxiong.com/ttLogin/userLogin", //tt

  GoodsList: "https://www.youchongxiong.com/goods/list", //获得萌宠列表

  OrderSubmit: "https://www.youchongxiong.com/order/createOrder", // 提交订单
  OrderSubmitVersion1: "https://www.youchongxiong.com/order/createOrderV1", // 提交订单
  orderProductSubmit: "https://www.youchongxiong.com/order/createOrderProduct", // 提交订单
  createOrderForBargain: "https://www.youchongxiong.com/order/createOrderForBargain", // 提交订单
  PayPrepayId: "https://www.youchongxiong.com/payBridge/getOrder", //微信支付定金
  PayPrepayIdV1: "https://www.youchongxiong.com/payBridge/getOrderV1", //微信支付定金V1
  PayPrepayOneStepId: "https://www.youchongxiong.com/payBridge/oneStep", //微信支付定金
  PayPrepayOneStepIdV1: "https://www.youchongxiong.com/payBridge/oneStepV1", //微信支付定金
  PayPrepayMember: "https://www.youchongxiong.com/payBridge/member", //微信支付会员
  PayPrepayProduct: "https://www.youchongxiong.com/payBridge/product", //商品
  PaySecondMoney: "https://www.youchongxiong.com/payBridge/paySecondMoney", //微信支付尾款
  SwanPayFirst: "https://www.youchongxiong.com/swanPayBridge/first", //swan支付定金
  SwanPaySecond: "https://www.youchongxiong.com/swanPayBridge/second", //swan支付尾款
  AliPayBridge: "https://www.youchongxiong.com/aliPayBridge/prePay", //支付宝支付定金
  AliPayBridgeSecond: "https://www.youchongxiong.com/aliPayBridge/prePaySecond", //支付宝支付尾款
  AliPayBridgeStep: "https://www.youchongxiong.com/aliPayBridge/prePayStep", //支付宝一步支付
  AliPayBridgeMember: "https://www.youchongxiong.com/aliPayBridge/member", //支付宝支付会员
  CreateOrderInsurance: "https://www.youchongxiong.com/payBridge/createOrderInsurance", //获取微信统一下单prepay_id

  CollectList: "https://www.youchongxiong.com/collect/list", //收藏列表
  CollectDelete: "https://www.youchongxiong.com/collect/delete", //取消收藏

  AddressList: "https://www.youchongxiong.com/address/list", //收货地址列表
  AddressPayList: "https://www.youchongxiong.com/address/payList", //收货地址列表
  AddressDetail: "https://www.youchongxiong.com/address/detail", //收货地址详情
  AddressSave: "https://www.youchongxiong.com/address/save", //保存收货地址
  AddressDelete: "https://www.youchongxiong.com/address/delete", //保存收货地址
  AddressOrder: "https://www.youchongxiong.com/order/addAddress", //修改order中的address信息

  RegionList: "https://www.youchongxiong.com/address/getRegionList", //获取区域列表

  OrderList: "https://www.youchongxiong.com/order/list", //订单列表
  RecordList: "https://www.youchongxiong.com/record/list", //订单列表
  BuyServiceStatus: "https://www.youchongxiong.com/buyService/getStatus", //获取服务状态
  BuyServiceSavePhone: "https://www.youchongxiong.com/buyService/savePhone", //保存手机号码
  BuyServiceGetList: "https://www.youchongxiong.com/buyService/getList", //获取协议列表
  BuyServicePrepay: "https://www.youchongxiong.com/buyService/prePay", //预支付
  BuyServiceIndexList: "https://www.youchongxiong.com/buyService/indexList",
  BuyServiceModUsed: "https://www.youchongxiong.com/buyService/modUsed",

  OpinionSend: "https://www.youchongxiong.com/opinion/add", //上传意见

  QueryProtectMsg: "https://www.youchongxiong.com/protect/getProtect", //获取协议内容
  SignProtect: "https://www.youchongxiong.com/protect/signProtect", //签署协议
  SaveMobile: "https://www.youchongxiong.com/protect/addUserMobile", //签署协议界面添加手机号码
  ShopIndex: "https://www.youchongxiong.com/shop/index", // shop index
  ChangeCollectShop: "https://www.youchongxiong.com/shop/changeCollectShop", //ChangeCollectShop
  ConfigIndex: "https://www.youchongxiong.com/config/findCat", //
  ConfigIndexAlipay: "https://www.youchongxiong.com/config/findAlipay", //
  GetBdConfig: "https://www.youchongxiong.com/config/baidu",
  ship: "https://www.youchongxiong.com/order/ship", //
  MakeThree: "https://www.youchongxiong.com/order/makeThree", //
  refunding: "https://www.youchongxiong.com/order/refunding", //refunding

  activityQuery: "https://www.youchongxiong.com/activity/query", //adopt
  activityQueryV2: "https://www.youchongxiong.com/activity/queryV2", //adopt
  bargainQueryList: "https://www.youchongxiong.com/bargain/queryList", //queryList
  bargainDetail: "https://www.youchongxiong.com/bargain/detail",
  bargainCutByOther: "https://www.youchongxiong.com/bargain/cutByOther", //bargainCutByOther

  confirmOrder: "https://www.youchongxiong.com/payBridge/confirmOrder", //confirmOrder
  sendGoodForDetail: "https://www.youchongxiong.com/good/sendGoodForDetail", //sendGoodForDetail
  LoadComment: "https://www.youchongxiong.com/comment/load", //loadCommentData

  BaiduGetSessionKey: "https://www.youchongxiong.com/auth/baiduGetOpenId", //百度登陆
  AlipayLogin: "https://www.youchongxiong.com/aliLogin/userLogin",
  MsgIndex: "https://www.youchongxiong.com/news/index",
  QueryShopInfo: "https://www.youchongxiong.com/shopInfo/qbId",
  EvaluateQuery: "https://www.youchongxiong.com/opinionV2/query",
  EvaluateAdd: "https://www.youchongxiong.com/opinionV2/add",
  AddNews: "https://www.youchongxiong.com/news/addNews",
  GetQiuniuToken: "https://www.youchongxiong.com/news/QiniuUpToken",
  RecordPage: "https://www.youchongxiong.com/recordPage/start", //记录跳转页面
  RecordLogin: "https://www.youchongxiong.com/recordLogin/start", //记录登陆记录
  RecordClick: "https://www.youchongxiong.com/click/any", //记录登陆记录

  CouponList: "https://www.youchongxiong.com/couponCenter/array", //收藏列表
  CouponActive: "https://www.youchongxiong.com/couponCenter/active", //取消收藏

  ShareBaseInfo: "https://www.youchongxiong.com/share/baseInfo", //送好友基本信息
  ShareInitCoupon: "https://www.youchongxiong.com/share/initCoupon", //获取优惠券ID
  ShareGetCoupon: "https://www.youchongxiong.com/share/getCoupon", //领取优惠券
  GetFilterSymbol: "https://www.youchongxiong.com/catalog/getSymbol", //分享界面筛选
  GetProductFilterSymbol: "https://www.youchongxiong.com/catalog/getProductSymbol", //分享界面筛选
  SellerGood: "https://www.youchongxiong.com/specGood/sellerDel", //销售删除数据
  BargainCatInfo: "https://www.youchongxiong.com/bargainCat/info", //砍罐头
  BargainCatCut: "https://www.youchongxiong.com/bargainCat/cut", //砍
  BargainCatChosenAdd: "https://www.youchongxiong.com/bargainCat/chosenAdd" //砍


};