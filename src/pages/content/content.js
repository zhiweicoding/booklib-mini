/* eslint-disable no-unused-vars */
import { ScrollView, View, Image, Input, Text, Camera, Button, Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getWindowHeightProduct } from '@utils/style'
import api from '@myConfig/api.js'
import { AtSwitch } from 'taro-ui'
import util from '@utils/util.js'
import LoadMore from '@com/loadMore/loadMore'
import Filter from '@com/filter/filter'

import './content.scss'

var app = Taro.getApp()

export default class search extends Taro.Component {

  config = {
    navigationBarTitleText: '天津年鉴'
  }

  constructor(props) {
    super(props)
    this.state = {
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
    return (
      <View className='container' >
        <ScrollView className='menu'
          scrollX={true}
          scrollWithAnimation >
          <View className='menu-item'>天津年鉴·2020</View>
          <View className='menu-g'>&gt;</View>
          <View className='menu-item'>第一章 测试标题</View>
          <View className='menu-g'>&gt;</View>
        </ScrollView>
      </View>
    )
  }
}