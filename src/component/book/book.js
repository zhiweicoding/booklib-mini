import {
    View,
    Navigator,
    Image,
    Text
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './book.scss'
import util from '../../utils/util.js'
import api from '../../config/api.js'
import CartWhiteImg from '@img/cartW.png'

export default class book extends Taro.Component {

    constructor(props) {
        super(props)
    }

    config = {
        Component: true
    }

    static defaultProps = {
        item: {},
        catIndex: 0,
        wherefrom: 0
    }

    static options = {
        multipleSlots: true // 在组件定义时的选项中启用多slot支持
    }

    openUrl = (item, whereFrom) => {
        let goodId = item.goodId
        let scale = item.scale
        let goodType = item.goodType
        Taro.navigateTo({
            url: `/pages/mus/mus?itemId=${goodId}&whereFrom=${whereFrom}`
        })

    }

    delGood(item, whereFrom) {
        let goodId = item.goodId
        let isSeller = Taro.getStorageSync('isSeller')
        if (isSeller == 1 && whereFrom == 0) {
            Taro.showModal({
                title: '请确认',
                content: '是否删除该商品',
                cancelText: '取消',
                confirmText: '确定',
                showCancel: true,
                success: function (e) {
                    if (e.confirm) {
                        Taro.showLoading({
                            title: '加载中..'
                        })
                        util.request(api.SellerGood, {
                            goodId: goodId,
                        }).then(function (res) {
                            Taro.hideLoading()
                            if (res.msgCode === 10000) {
                                Taro.showToast({
                                    title: '删除成功',
                                    icon: 'success',
                                    duration: 2000
                                })
                            } else if (res.msgCode === 10001) {
                                Taro.showToast({
                                    title: '删除失败',
                                    icon: 'none',
                                    duration: 2000
                                })
                            }
                        })
                    }
                }
            })
        }

    }

    onAdd = (goodId) => {
        util.request(api.ModifyGoodUrl, {
            goodId: goodId,
            addOrMinus: 0,
        }).then(function (res) {
            if (res.msgCode === 10000) {
                Taro.showToast({
                    title: '已添加到购物车',
                    icon: 'none'
                })
            } else if (res.msgCode === 10001) {
                Taro.showToast({
                    title: '添加喜欢失败',
                    icon: 'none'
                })
            }
        })
    }

    render() {
        const { item, catIndex, whereFrom } = this.props
        let goodBrief = item.goodBrief;
        // let resultDom = null;
        // if (goodBrief && goodBrief.indexOf("编号") != -1) {
        //     resultDom = <Text className='catItem-msg-name' onClick={this.openUrl.bind(this, item, whereFrom)}>{item.goodBrief.split('编号')[0]}</Text>
        // } else {
        //     resultDom = <Text className='catItem-msg-name' onClick={this.openUrl.bind(this, item, whereFrom)}>{item.goodBrief}</Text>
        // }
        return (
            <View className={'bookItem '}>
                <View className='bookItem-left' style='position:relative;' onClick={this.openUrl.bind(this, item, whereFrom)}>
                    <Image
                        className='bookItem-left-img'
                        src={'https://lg-qrm18qcm-1255940368.cos.ap-shanghai.myqcloud.com/miniProgram/v2-7f1b40d87168cda877a05d9ff55007b6_720w.jpeg'}
                        backgroundSize='cover'
                        mode='aspectFill'
                        lazyLoad={true} ></Image>
                </View>
                <View className='bookItem-right' onClick={this.openUrl.bind(this, item, whereFrom)}>
                    <View className='bookItem-right-title'>
                        <View className='bookItem-right-title-name'>天津年鉴</View>
                        <View className='bookItem-right-title-year'>2021</View>
                    </View>
                    <View className='bookItem-right-three'>天津市地方志编修委员会</View>
                    <View className='bookItem-right-four'>《天津年鉴》编辑部</View>
                    <View className='bookItem-right-read'>
                        <View className='bookItem-right-read-title' >阅读量：</View>
                        <View className='bookItem-right-read-number' >22990</View>
                    </View>
                </View>
            </View>
        )
    }
}
