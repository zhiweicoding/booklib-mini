import {
    View,
    Navigator,
    Image,
    Text
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './scrollHor.scss'
import util from '../../utils/util.js'
import api from '../../config/api.js'
import '@styles/iconfont.scss'

export default class scrollHor extends Taro.Component {

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

    render() {
        const { array } = this.props

        return (
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
        )
    }
}
