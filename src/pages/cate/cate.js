import {
  View,
  Text,
  ScrollView,
  Image, Block, Input
} from '@tarojs/components'
import Taro, { Component } from '@tarojs/taro'
import VirtualList from '@tarojs/components/virtual-list'
import Loading from '@com/loading'
import LoadMore from '@com/loadMore/loadMore'
import Pic from '@com/pic/pic'
import CatList from '@com/catList/catList'
import { getWindowHeight } from '@utils/style'
import { AtTabs, AtTabsPane } from 'taro-ui'
import util from '@utils/util.js'
import apiProduct from '@myConfig/apiProduct.js'
import api from '@myConfig/api.js'

import './cate.scss'

var app = Taro.getApp()

export default class cate extends Taro.Component {

  config = {
    navigationBarTitleText: '彩页',
    enablePullDownRefresh: false
  }

  constructor(props) {
    super(props)
    this.state = {
      hasNextPage: true,
      current: 0,
    }

  }


  componentWillMount() {
  }

  onShareAppMessage = () => {

  }

  onShareTimeline() {
  }

  componentDidMount(options = this.$router.params || {}) {
    // 页面渲染完成
    let that = this
  }

  componentDidShow(options = this.$router.params || {}) {
    let that = this
  }

  componentDidHide() {
    // 页面隐藏
  }

  componentWillUnmount() {
    // 页面关闭
  }

  handleClick(value) {
    this.setState({
      current: value
    })
  }
  render() {
    const { loaded, leftData, searchMsg, allProductArray, recommendClsArray } = this.state
    const height = getWindowHeight(false)
    const tabList = [{ title: '标签页1' }, { title: '标签页2' }]
    return (
      <Block>
        <View className='search'>
          <View className='input'>
            <View onClick={this.gotoSearch} className='searchBefore'>
              <Image className='icon'></Image>
              <Input className='txt' placeholder='随便搜搜' value='' />
            </View>
            <View className='searchAfter'>
              {/* <Image onClick={this.uploadPhoto} className='searchImg'></Image> */}
              <Navigator url='/pages/search/search?fromPage=act' className='searchName'>搜索</Navigator>
            </View>
          </View>
        </View>

        <ScrollView
          className='hor'
          scrollX={true}
          scrollWithAnimation>
          <View className='hor-item horOn'>天津年鉴·2020</View>
          <View className='hor-item'>天津年鉴·2020</View>
          <View className='hor-item'>天津年鉴·2020</View>
          <View className='hor-item'>天津年鉴·2020</View>
          <View className='hor-item'>天津年鉴·2020</View>
          <View className='hor-item'>天津年鉴·2020</View>
        </ScrollView>
        <ScrollView
          className='item' style={'height:' + height}
          scrollY
          scrollWithAnimation
          onScrollToLower={this.loadMoreData.bind(this)}>

          <Pic></Pic>
          <Pic></Pic>
          <Pic></Pic>
          <LoadMore hasMore={this.state.hasNextPage}></LoadMore>
        </ScrollView>
      </Block>
    )
  }
}

