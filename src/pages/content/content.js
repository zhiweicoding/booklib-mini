/* eslint-disable no-unused-vars */
import { ScrollView, View, Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getWindowHeightProduct } from '@utils/style'
import api from '@myConfig/api.js'
import util from '@utils/util.js'

import './content.scss'

var app = Taro.getApp()

export default class content extends Taro.Component {

  config = {
    navigationBarTitleText: '天津年鉴'
  }

  constructor(props) {
    super(props)
    this.state = {
      htmlSnip: `<div class="div_class">
  <p class="segPart">
   生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
  </p>
  <p class="p">
  Life is&nbsp;<i style="color:red;">like</i>&nbsp;a box of
  <b>&nbsp;chocolates</b>.
</p>
<img class="imgCls" src="https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniProgram/v2-7f1b40d87168cda877a05d9ff55007b6_720w.jpeg"/>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<p class="segPart">
生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
<div class='blankLineCls'></div>
</div>
`,
      htmlSnip2: `<div class="div_class">
<p class="segPart">
 生活就像是一盒强颗粒，哈哈，我打错字了，但是管他呢！各种测试
</p>
`
    }
  }

  onShareAppMessage = () => {

  }

  componentWillMount(options = this.$router.params || {}) {
    console.log(this.$router.params);

    let searchHis = Taro.getStorageSync('searchHis')
    this.setState({
      searchHis: searchHis
    })
  }

  componentDidShow(options = this.$router.params || {}) {
    console.log(this.$router.params);

  }

  render() {
    const {
      historyKeyword,
      hotKeyword,
      helpKeyword,
      searchStatus,
      moreFilter
    } = this.state
    const height = getWindowHeightProduct(false)
    const array = ['天津年鉴', '天津年鉴']
    return (
      <View className='container' >
        <View className='title'>决策中心</View>
        <ScrollView
          className='hor'
          scrollX={true}
          scrollWithAnimation>
          {array.map((item, index) => {
            return (
              <Block>
                <View className={'hor-item ' + ((index == array.length - 1) ? ' horOn ' : '')}>天津年鉴·2020</View>
                {index != array.length - 1 && (
                  <View className='hor-g'>&gt;</View>
                )}
              </Block>
            )
          })}
        </ScrollView>
        <View className='readNum'>阅读量：24411</View>
        <ScrollView
          className='scroll'
          scrollX={true}
          scrollWithAnimation>
          <View className='scroll-item scrollOn'>天津年鉴·2020</View>
          <View className='scroll-item'>天津年鉴·2020</View>
          <View className='scroll-item'>天津年鉴·2020</View>
          <View className='scroll-item'>天津年鉴·2020</View>
        </ScrollView>

        <RichText className='richText' nodes={this.state.htmlSnip} style={'background-color: ' + '#ddafa6' + '; '} />

        <View className='bottom'>
          <View className='bottom-left'>
            <View className='icon icon-sort' style={'font-size:20px;color:#461c14;'}></View>
            &nbsp;目录
          </View>

          <View className='bottom-mid'>
            <View className='icon icon-copy' style={'font-size:20px;color:#461c14;'}></View>
            &nbsp;复制文本
          </View>

          <View className='bottom-right'>
            <View className='icon icon-favor_fill_light' style={'font-size:20px;color:#461c14;'}></View>
            &nbsp;收藏
          </View>
        </View>
      </View>
    )
  }
}