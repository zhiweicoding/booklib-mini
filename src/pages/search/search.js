/* eslint-disable no-unused-vars */
import { ScrollView, View, Image, Input, Text, Camera, Button, Block } from '@tarojs/components'
import Taro from '@tarojs/taro'
import { getWindowHeightProduct } from '@utils/style'
import api from '@myConfig/api.js'
import { AtSwitch } from 'taro-ui'
import util from '@utils/util.js'
import LoadMore from '@com/loadMore/loadMore'
import Filter from '@com/filter/filter'

import './search.scss'

var app = Taro.getApp()

export default class search extends Taro.Component {

  config = {
    navigationBarTitleText: '智能搜索'
  }

  constructor(props) {
    super(props)
    this.state = {
      checkValue: false,
      searchHis: [],
      switchType: 1,
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

  handleChange = (e) => {
    let that = this
    that.setState({
      checkValue: e
    })

  }

  switchType = (num) => {
    this.setState({
      switchType: num
    })
  }

  openUrl(){
    Taro.navigateTo({
      url:`/pages/sr/sr`
    })
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
        <View className='search'>
          <View className='search-head'>
            <View className={'search-head-i ' + (this.state.switchType == 1 ? 'zong' : '')} onClick={this.switchType.bind(this, 1)}>正文</View>
            <View className={'search-head-i ' + (this.state.switchType == 2 ? 'zong' : '')} onClick={this.switchType.bind(this, 2)}>图片</View>
          </View>
          <View className='search-switch'>
            <View className='search-switch-left'>智能检索</View>
            <AtSwitch checked={this.state.checkValue} border={false} color={'#8a4b3f'} onChange={this.handleChange.bind(this)} />
            <View className='search-switch-right'>高阶检索</View>
          </View>

          <View className='search-msg'>

            {!this.state.checkValue && (
              <Input className='search-msg-sample' value='' placeholder='请输入检索内容'></Input>
            )}
            {this.state.checkValue && (
              <View className='search-msg-hight'>
                <View className='search-msg-hight-line'>
                  <View className='search-msg-hight-line-l'>
                    {this.state.switchType == 1 ? '正文' : '标题'}
                  </View>
                  <Input className='search-msg-hight-line-r' value='' placeholder={'请输入' + (this.state.switchType == 1 ? '正文' : '标题')}></Input>
                </View>
                <View className='search-msg-hight-line'>
                  <View className='search-msg-hight-line-l'>
                    {this.state.switchType == 1 ? '标题' : ' 简介'}
                  </View>
                  <Input className='search-msg-hight-line-r' value='' placeholder={'请输入' + (this.state.switchType == 1 ? '标题' : '简介')}></Input>
                </View>
                <View className='search-msg-hight-line'>
                  <View className='search-msg-hight-line-l'>作者</View>
                  <Input className='search-msg-hight-line-r' value='' placeholder='请输入作者'></Input>
                </View>
                <View className='search-msg-hight-line'>
                  <View className='search-msg-hight-line-l'>时间范围</View>
                  <View className='search-msg-hight-line-y'>
                    <Input className='search-msg-hight-line-y-d' value='' placeholder='起始年份'></Input>
                    <View className='search-msg-hight-line-y-g'>-</View>
                    <Input type='number' className='search-msg-hight-line-y-d' value='' placeholder='终止年份'></Input>
                  </View>

                </View>

              </View>
            )}


            <Button className='search-msg-btn' onClick={this.openUrl.bind(this)}>检索</Button>
          </View>

          {this.state.searchHis.length > 0 && (
            <View className='search-his'>
              <View className='search-his-tit'>检索记录</View>
              <View className='search-his-msg'>
                {this.state.searchHis.map((item, i) => {
                  return (
                    <View className='search-his-msg-i'>{item}</View>
                  )
                })}
              </View>
            </View>
          )}
        </View>
      </View>
    )
  }
}