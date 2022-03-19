import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './reload.scss'

export default class reload extends Taro.Component {

  config = {
    Component: true
  }

  static options = {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }
  _observeProps = []

  render() {
    return (
      <View>
        <View className='loading_box'>
          <View className='loading3 loading3_1'></View>
          <View className='loading3 loading3_2'></View>
          <View className='loading3 loading3_3'></View>
        </View>
      </View>
    )
  }
}
