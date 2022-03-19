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
import './filterProduct.scss'

export default class Filter extends Taro.Component {

    static defaultProps = {
        noShow: true,
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
        let symbolArray = Taro.getStorageSync('productSymbolArray')
        let nowShowS = this.props.noShow
        this.state = {
            noShow: nowShowS,
            symbol: props.symbol,
            price: props.price,
            minPrice: props.minPrice,
            maxPrice: props.maxPrice,
            symbolArray: symbolArray
        }
    }

    onReset = () => {
        this.setState({
            price: '0',
            symbol: '0',
            minPrice: '',
            maxPrice: ''
        })

    }

    handleFilter = () => {
        const { price, symbol, minPrice, maxPrice } = this.state
        this.props.onFilter(price, symbol, minPrice, maxPrice)
    }

    openSortFilter = (key, value) => {
        let price = this.state.price
        let symbol = this.state.symbol

        switch (key) {
            case 'price':
                price = value
                break
            case 'symbol':
                symbol = value
                break
        }
        let that = this
        this.setState({
            price: price,
            symbol: symbol
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
        })
    }

    maxChange = (e) => {
        let change = e.detail.value
        let that = this
        this.setState({
            maxPrice: change,
            price: -1,
        })
    }

    render() {
        const { noShow } = this.props
        const { gender, price, minPrice, maxPrice, symbolArray } = this.state
        return (
            <View>
                <View className={classNames('sort-box-more', noShow && 'unVisible')} >
                    <ScrollView className='filterHead' scrollY>

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
                            <View className='head'>0~50元</View>
                            <View className='tail'>25%的选择</View>
                        </View>
                        <View className={'itemPrice ' + (price == '2' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'price', '2')}>
                            <View className='head'>50~200元</View>
                            <View className='tail'>64%的选择</View>
                        </View>
                        <View className={'itemPrice ' + (price == '3' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'price', '3')}>
                            <View className='head'>200元以上</View>
                            <View className='tail'>11%的选择</View>
                        </View>
                        <View className='sortTitle marginTop'>用品种类</View>
                        <View className={'item ' + (symbol == '0' ? 'active' : '')}
                            onClick={this.openSortFilter.bind(this, 'symbol', '0')}>全部用品</View>
                        {symbolArray.map((item, i) => {
                            return (
                                <View key={item.categoryId} className={'item ' + (symbol == `${item.categoryId}` ? 'active' : '')}
                                    onClick={this.openSortFilter.bind(this, 'symbol', `${item.categoryId}`)}>{item.categoryName}</View>
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
