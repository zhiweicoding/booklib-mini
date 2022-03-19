import {  View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './loadMore.scss'

export default class loadMore extends Taro.Component {

  
  static defaultProps = {
    hasMore: true
  }
  static options = {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }
  _observeProps = []
  state = {}
  config = {
    component: true
  }

  render() {
    const { hasMore } = this.props
    const {} = this.state
    return (
      <View className='tips1'>
        {hasMore ? (
          <View className='loading_box'>
            <View className='loading1'></View>
          </View>
        ) : (
          <View className='havenoclass'>没有更多内容了</View>
        )}
      </View>
    )
  }
}
