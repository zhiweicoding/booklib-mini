import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import './index.scss'

export default class Loading extends Component {
  render () {
    return (
      <View className='comp-loading'>
        <Image src='https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniProgram/loading.gif' className='comp-loading__img' />
      </View>
    
    )
  }
}

