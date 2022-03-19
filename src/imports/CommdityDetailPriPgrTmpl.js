import { Block, View, Image, Text, Button } from '@tarojs/components'
import Taro from '@tarojs/taro'

//获取应用实例
var app = Taro.getApp()

export default class CommdityDetailPriPgrTmpl extends Taro.Component {

  config = {
    navigationBarTitleText: '优宠熊寻猫',
    enablePullDownRefresh: false
  }

  static options = {
    addGlobalClass: true
  }
  
  static defaultProps = {
    data: {
      imgUrlArray:[],
      cutNum:'',
      cutMoney:'',
      userImg:'',
      userName:'',
      flat:'',
      currentPrice:'',
      oldPricev:'',
      goods_id:'',
      helpimg:'',
      orderid:'',
      pay_status:'',
      currentCutMoney:'',
      helpPeopleExist:'',
      pay_money:'',
      cutall:'',
      mycutgo:'',
      helpRecord:''
    }
  }

  render() {
    const {
      data: {
        imgUrlArray,
        cutNum,
        cutMoney,
        userImg,
        userName,
        flat,
        currentPrice,
        oldPrice,
        goods_id,
        helpimg,
        orderid,
        pay_status,
        currentCutMoney,
        helpPeopleExist,
        pay_money,
        cutall,
        mycutgo,
        helpRecord
      }
    } = this.props
    return (
      <Block>
        {helpRecord == 10 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='hdEnded tc ft28'>
                你下手慢了，宝贝已经被抢光！
              </View>
              <View className='ljBuyBox mt30'>
                <Button className='ljBuyBtn button_bg' onClick={this.goBack}>
                  看看其它活动
                </Button>
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub ft28'>
                  <Text className='cBlack'>{cutNum + '人共砍掉了'}</Text>
                  <Text className='mainColor'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 我看到的   */}
        {/* 我已砍过  显示砍价进度    */}
        {helpRecord == 1 && (
          <Block>
            <View className='meProBox white_bg'>
              <View className='flex flexCCen'>
                <Image
                  className='kjrPic mr40'
                  mode='aspectFill'
                  src={userImg}
                ></Image>
                <View className='sub kjrTit'>
                  <Text className='mr10 ft26'>{userName}</Text>
                  <Text className='succParti mainColor ft26'>
                    成功参与活动，快快让好友助自己一臂之力！
                  </Text>
                </View>
              </View>
              <View className='pd15'>
                <View>
                  <View className='proBox'>
                    <View className='progBarBox'>
                      <View
                        className='curProgress mainColor_bg ft24'
                        style={'left: calc(' + (100 - flat) + '% - 50rpx)'}
                      >
                        <Text className='proPriVal cWhite ft24'>
                          <Text className='ft20 cWhite'>￥</Text>
                          {currentPrice}
                        </Text>
                      </View>
                      <View
                        className='progBar'
                        style={'width:' + (flat / 100) * 630 + 'rpx'}
                      ></View>
                      <View className='progBarInner'></View>
                    </View>
                  </View>
                  <View className='clearfix mt10'>
                    <View className='fl grey ft24'>
                      {'原价：￥' + oldPrice}
                    </View>
                    <View className='fr mainColor ft24'>底价：￥0</View>
                  </View>
                </View>
                <View className='flex flexMBtw flexCCen mt15'>
                  <View className='sub'>
                    {imgUrlArray.map((item, index) => {
                      return (
                        <Block key='index'>
                          <Image
                            className='parpantPic'
                            mode='aspectFill'
                            src={item}
                          ></Image>
                          {index > 4 && (
                            <Block>
                              <Text className='shluehao transLeft3'>...</Text>
                            </Block>
                          )}
                        </Block>
                      )
                    })}
                  </View>
                  <View className='bargVal lineText sub'>
                    <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                    <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 砍价成功   */}
        {helpRecord == 4 && (
          <Block>
            <View className='commdityDetail_kddj white_bg tc'>
              <View className='mb15'>
                <Image
                  className='barSucSmile'
                  mode='aspectFill'
                  src='http://www.ixiaochengxu.cc/resource/images/bargain/smile.png'
                ></Image>
              </View>
              <View className='kj_suces mb15 redColor'>恭喜您砍价成功!</View>
              <View className='cddj_mid mb20'>
                小伙伴们合力发功成功帮你砍到底价，马上入手！
              </View>
              <Button
                className='ljBuyBtn button_bg'
                onClick={this.gobuy}
                data-id={goods_id}
              >
                立即购买
              </Button>
              <View className='flex flexMBtw flexCCen mt30'>
                <View className='sub aliLeft'>
                  {helpimg.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item.headimgurl}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 已经购买了  */}
        {helpRecord == 11 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='hdEnded tc f14'>你已经购买此宝贝！</View>
              <View className='ljBuyBox mt30'>
                <Button
                  className='ljBuyBtn button_bg'
                  onClick={this.tomyorder}
                  data-id={orderid}
                  data-status={pay_status}
                >
                  查看订单
                </Button>
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 还没有购买 活动已结束   */}
        {helpRecord == 6 && (
          <Block>
            <View className='meProBox white_bg'>
              <View className='kjrBox flex flexCCen'>
                <Image
                  className='kjrPic mr40'
                  mode='aspectFill'
                  src={userImg}
                ></Image>
                <View className='sub kjrTit'>
                  <Text className='mr10 ft26'>{userName}</Text>
                  <Text className='succParti redColor ft26'>
                    时间到了,当前砍价活动已经结束了，您可以使用优惠价格购买萌宠
                  </Text>
                </View>
              </View>
              <View className='pd30'>
                <View>
                  <View className='proBox'>
                    <View className='progBarBox'>
                      <View
                        className='curProgressBlack grey_bg ft24'
                        style={'left: calc(' + (100 - flat) + '% - 50rpx)'}
                      >
                        <Text className='proPriVal cWhite ft24'>
                          <Text className='ft22 cWhite'>￥</Text>
                          {currentPrice}
                        </Text>
                      </View>
                      <View
                        className='progBar'
                        style={
                          'width:' + (flat / 100) * 630 + 'rpx;background:#999;'
                        }
                      ></View>
                      <View className='progBarInner'></View>
                    </View>
                  </View>
                  <View className='clearfix mt10'>
                    <View className='fl grey f14'>{'原价：￥' + oldPrice}</View>
                    <View className='fr mainColor'>底价：￥0</View>
                  </View>
                </View>
                <View
                  className='flex flexMBtw flexCCen mt20'
                  onClick={this.partic}
                >
                  <View className='sub'>
                    {imgUrlArray.map((item, index) => {
                      return (
                        <Block key='index'>
                          <Image
                            className='parpantPic'
                            mode='aspectFill'
                            src={item}
                          ></Image>
                          {index > 4 && (
                            <Block>
                              <Text className='shluehao transLeft3'>...</Text>
                            </Block>
                          )}
                        </Block>
                      )
                    })}
                  </View>
                  <View className='bargVal lineText sub'>
                    <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                    <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 朋友看到的   */}
        {/* 帮他砍   */}
        {helpRecord == 2 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='kjrBox flex flexCCen'>
                <Image
                  className='kjrPic mr40'
                  mode='aspectFill'
                  src={userImg}
                ></Image>
                <View className='sub kjrTit'>
                  <Text className='mr10 ft26'>{userName}</Text>
                  <Text className='succParti redColor'>
                    成功参与活动，动动小手快快助TA一臂之力！
                  </Text>
                </View>
              </View>
              <View className='ljBuyBox mt30'>
                <Button
                  className='ljBuyBtn button_bg'
                  onClick={this.helpbargain}
                >
                  帮TA砍一刀
                </Button>
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {helpRecord == 3 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='kjrBox flex flexCCen'>
                <Image
                  className='kjrPic mr40'
                  mode='aspectFill'
                  src={userImg}
                ></Image>
                <View className='sub kjrTit'>
                  <Text className='mr10 ft26'>{userName}</Text>
                  <Text className='succParti redColor ft26'>
                    得到了你的帮助，我也可以参与！
                  </Text>
                </View>
              </View>
              <View className='ljBuyBox mt30'>
                <View className='helpVal tc ft26  mb15 mainColor'>
                  {'一出手就帮朋友砍掉了' + currentCutMoney + '元，功力了得啊~'}
                </View>
                {helpPeopleExist ? (
                  <Button className='ljBuyBtn button_bg' onClick={this.gomycut}>
                    去我的砍价页
                  </Button>
                ) : (
                    <Button className='ljBuyBtn button_bg' onClick={this.gomycut}>
                      我也要
                  </Button>
                  )}
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 还没帮砍 好友已经购买 我也要参加   */}
        {helpRecord == 9 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='kjrBox flex flexCCen'>
                <Image
                  className='kjrPic mr40'
                  mode='aspectFill'
                  src={userImg}
                ></Image>
                <View className='sub kjrTit'>
                  <Text className='mr10 ft26'>{userName}</Text>
                  <Text className='succParti redColor'>
                    {'已用优惠价格（￥' +
                      pay_money +
                      '元）购买了该产品，帮自己省了' +
                      cutall +
                      '元，我也可以参加本次活动！'}
                  </Text>
                </View>
              </View>
              <View className='ljBuyBox mt30'>
                {mycutgo ? (
                  <Button className='ljBuyBtn button_bg' onClick={this.gomycut}>
                    去我的砍价页
                  </Button>
                ) : (
                    <Button className='ljBuyBtn button_bg' onClick={this.gomycut}>
                      我也要
                  </Button>
                  )}
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 还没帮砍 已砍到底价   我也要参加  */}
        {helpRecord == 5 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='kjrBox flex flexCCen'>
                <Image
                  className='kjrPic mr40'
                  mode='aspectFill'
                  src={userImg}
                ></Image>
                <View className='sub kjrTit'>
                  <Text className='mr10 ft26'>{userName}</Text>
                  <Text className='succParti redColor'>
                    砍价时间已到，好友可以使用优惠价格购买萌宠，你也可以参加此次活动！
                  </Text>
                </View>
              </View>
              <View className='ljBuyBox mt30'>
                {mycutgo ? (
                  <Button className='ljBuyBtn button_bg' onClick={this.gomycut}>
                    去我的砍价页
                  </Button>
                ) : (
                    <Button className='ljBuyBtn button_bg' onClick={this.gomycut}>
                      我也要
                  </Button>
                  )}
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
        {/* 还没砍 活动已经结束   */}
        {helpRecord == 7 && (
          <Block>
            <View className='commdityDetail_priPgr white_bg'>
              <View className='hdEnded tc'>你来晚了，本轮活动已结束！</View>
              <View className='ljBuyBox mt30'>
                <Button className='ljBuyBtn button_bg'>看看其它活动</Button>
              </View>
              <View className='dsrDsqBox flex flexMBtw flexCCen mt25'>
                <View className='sub'>
                  {imgUrlArray.map((item, index) => {
                    return (
                      <Block key='index'>
                        <Image
                          className='parpantPic'
                          mode='aspectFill'
                          src={item}
                        ></Image>
                        {index > 4 && (
                          <Block>
                            <Text className='shluehao transLeft3'>...</Text>
                          </Block>
                        )}
                      </Block>
                    )
                  })}
                </View>
                <View className='bargVal lineText sub'>
                  <Text className='grey ft26'>{cutNum + '刀共砍掉了'}</Text>
                  <Text className='mainColor ft26'>{cutMoney + '元'}</Text>
                </View>
              </View>
            </View>
          </Block>
        )}
      </Block>
    )
  }


}
