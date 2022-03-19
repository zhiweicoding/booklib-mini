import {
    View,
    Navigator,
    Image,
    Text
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './mu.scss'
import util from '../../utils/util.js'
import api from '../../config/api.js'
import '@styles/iconfont.scss'

export default class mu extends Taro.Component {

    constructor(props) {
        super(props)
    }

    config = {
        Component: true
    }

    static defaultProps = {
        item: {},
        catIndex: 0,
        wherefrom: 0,
        hasNext: false
    }

    static options = {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    }

    openUrl = (item, whereFrom) => {
        let hasNext = this.props.hasNext;
        if (hasNext) {
            Taro.navigateTo({
                url: `/pages/mus/mus`
            })
        } else {
            Taro.navigateTo({
                url: `/pages/content/content?title=title&content=content`
            })
        }

    }

    render() {
        const { item, catIndex, whereFrom } = this.props

        return (
            <View className={'mu '} onClick={this.openUrl.bind(this)}>
                <View className='mu-txt'>2019数字天津</View>
                {this.props.hasNext && (
                    <View className='mu-icon icon icon-right' style={'font-size:18px;color:#461c14;'}></View>
                )}
            </View>
        )
    }
}
