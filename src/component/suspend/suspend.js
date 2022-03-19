import { View, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'
import './suspend.scss'

// export default class CustomComp extends Component {
//   static externalClasses = ['my-class']

//   render() {
//     return <View className="my-class">这段文本的颜色由组件外的 class 决定</View>
//   }
// }

export default class suspend extends Taro.Component {

  constructor(props) {
    super(props)
  }

  config = {
    Component: true
  }

  static defaultProps = {
    cssTop: true,
    imgUrl: true,
  }

  static options = {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  }

  _observeProps = []

  attached = () => {
    // console.log('attached')
  }
  moved = () => {
    // console.log('moved')
  }
  detached = () => {
    // console.log('detached')
  }
  dosome() {
    let typeStr = this.props.type
    if (typeStr == 'top') {
      Taro.pageScrollTo({
        scrollTop: 0
      })
    } else if (typeStr == 'phone') {
      Taro.makePhoneCall({
        phoneNumber: '18302284459'
      })
    }
  }

  render() {
    const { cssTop, imgUrl } = this.props
    const { } = this.state
    return (
      <View>
        <Image
          className='circle-float'
          style={'top: ' + cssTop + '%;'}
          src={imgUrl}
          onClick={this.dosome}
        ></Image>
      </View>
    )
  }
}
