import Taro, { Component } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import weixin from './assets/weixin.png'
import './share.scss'

export default class Share extends Component {
  render() {
    return (
      <Button
        key='service'
        className='pop-weixin'
        open-type="share"
        style='border: none;border: 0 solid #dddddd;border-right-width: 1rpx;border-radius:0px;'
        plain
      >
        <Image src={weixin} className='pop-weixin-img' />
      </Button>
    )
  }
}

