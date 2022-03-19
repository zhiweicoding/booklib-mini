import {
    View,
    Navigator,
    Image,
    Text,
    Input,
    ScrollView
} from '@tarojs/components'
import Taro from '@tarojs/taro'
import classNames from 'classnames'
import './filter.scss'

export default class Filter extends Taro.Component {

    static defaultProps = {
        noShow: true,
        gender: '0',
        price: '0',
        symbol: '0',
        minPrice: '',
        maxPrice: '',
        symbolArray: [],
        onFilter: () => { },
        onChange: () => { },
        onClose: () => { }
    }

    constructor(props) {
        super(props)
        let filterBean = Taro.getStorageSync('filterBean')
        let symbolArray = Taro.getStorageSync('symbolArray')
        let nowShowS = this.props.noShow
        if (filterBean) {
            this.state = {
                noShow: nowShowS,
                gender: filterBean.gender,
                symbol: filterBean.symbol,
                price: filterBean.price,
                minPrice: filterBean.minPrice,
                maxPrice: filterBean.maxPrice,
                symbolArray: symbolArray
            }
        } else {
            this.state = {
                noShow: nowShowS,
                gender: props.gender,
                symbol: props.symbol,
                price: props.price,
                minPrice: props.minPrice,
                maxPrice: props.maxPrice,
                symbolArray: symbolArray
            }
        }

    }

    onReset = () => {
        this.setState({
            gender: '0',
            price: '0',
            symbol: '0',
            minPrice: '',
            maxPrice: ''
        })

        let filterBean = {
            gender: '0',
            symbol: '0',
            price: '0',
            minPrice: '',
            maxPrice: '',
        }

        Taro.setStorageSync('filterBean', filterBean)
    }

    handleFilter = () => {
        const { gender, price, symbol, minPrice, maxPrice } = this.state
        this.props.onFilter(gender, price, symbol, minPrice, maxPrice)
    }

    openSortFilter = (key, value) => {
        let gender = this.state.gender
        let price = this.state.price
        let symbol = this.state.symbol

        switch (key) {
            case 'gender':
                gender = value
                break
            case 'price':
                price = value
                break
            case 'symbol':
                symbol = value
                break
        }
        let that = this
        this.setState({
            gender: gender,
            price: price,
            symbol: symbol
        }, () => {
            let filterBean = that.state
            Taro.setStorageSync('filterBean', filterBean)
        })
    }

    handleClose = () => {
        this.props.onClose()
    }

    minChange = (e) => {
        let change = e.detail.value
        let that = this
        this.setState({
            minPrice: change,
            price: -1
        }, () => {
            let filterBean = that.state
            Taro.setStorageSync('filterBean', filterBean)
        })
    }

    maxChange = (e) => {
        let change = e.detail.value
        let that = this
        this.setState({
            maxPrice: change,
            price: -1,
        }, () => {
            let filterBean = that.state
            Taro.setStorageSync('filterBean', filterBean)
        })
    }

    render() {
        const { noShow } = this.props
        const { gender, price, minPrice, maxPrice, symbolArray } = this.state
        return (
            <View>
                <View className={classNames('sort-box-more', noShow && 'unVisible')} >
                    <ScrollView className='filterHead' scrollY>
                        <View className='sortTitle'>性别</View>
                        <View className={'item ' + (gender == '0' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'gender', '0')}>全部性别</View>
                        <View className={'item ' + (gender == '1' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'gender', '1')}> 弟弟</View>
                        <View className={'item ' + (gender == '2' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'gender', '2')}> 妹妹</View>
                        {/* <View className={'itemNoBorder '}>
                        </View> */}
                        <View className='sortTitle marginTop'>价格区间（元）</View>
                        <View className='sortInput marginTop10 marginBottom30'>
                            <Input
                                name='input'
                                type='number'
                                className='inputCls'
                                value={minPrice}
                                confirmType='search'
                                auto-focus={false}
                                focus={false}
                                onInput={this.minChange}
                                onConfirm={this.handleFilter}
                                placeholder={'最低价'}
                            ></Input>
                            <View>——</View>
                            <Input
                                name='input'
                                type='number'
                                className='inputCls'
                                auto-focus={false}
                                focus={false}
                                value={maxPrice}
                                confirmType='search'
                                onInput={this.maxChange}
                                onConfirm={this.handleFilter}
                                placeholder={'最高价'}
                            ></Input>
                        </View>
                        <View className={'itemPrice ' + (price == '0' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'price', '0')}>全部价格</View>
                        <View className={'itemPrice ' + (price == '1' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'price', '1')}>
                            <View className='head'>2000以下</View>
                            <View className='tail'>25%的选择</View>
                        </View>
                        <View className={'itemPrice ' + (price == '2' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'price', '2')}>
                            <View className='head'>2001-8000</View>
                            <View className='tail'>64%的选择</View>
                        </View>
                        <View className={'itemPrice ' + (price == '3' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'price', '3')}>
                            <View className='head'>8000以上</View>
                            <View className='tail'>11%的选择</View>
                        </View>
                        <View className='sortTitle marginTop'>猫咪品种</View>
                        <View className={'item ' + (symbol == '0' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'symbol', '0')}>全部品种</View>
                        {symbolArray.map((item, i) => {
                            return (
                                <View key={item.symbolId} className={'item ' + (symbol == `${item.symbolId}` ? 'active' : '')}
                                    onClick={this.openSortFilter.bind(this, 'symbol', `${item.symbolId}`)}>{item.symbolName}</View>
                            )
                        })}
                    </ScrollView>

                    <View className='filterEnd'>
                        <View
                            className='joinColor sub flex MCCen'
                            onClick={this.onReset}>重置</View>
                        <View
                            className='buyColor cWhite ft28 looBtn sub flex MCCen'
                            onClick={this.handleFilter}>确定</View>
                    </View>

                </View>
                <View
                    className={classNames('blackBack', noShow && 'unVisible')}
                    onClick={this.handleClose}></View>
            </View>
        )
    }
}
