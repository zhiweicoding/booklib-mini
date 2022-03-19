#### 介绍

使用taro 开发

本来是内部小程序源码
因为项目结束，基本不再更新，所以就开源了
可以学习研究

```
生命周期
componentWillMount
在微信小程序中这一生命周期方法对应页面的onLoad或入口文件app中的onLaunch

componentDidMount
在微信小程序中这一生命周期方法对应页面的onReady或入口文件app中的onLaunch，在 componentWillMount后执行

componentDidShow
在微信小程序中这一生命周期方法对应 onShow

componentDidHide
在微信小程序中这一生命周期方法对应 onHide

componentDidCatchError
错误监听函数，在微信小程序中这一生命周期方法对应 onError

componentDidNotFound
页面不存在监听函数，在微信小程序中这一生命周期方法对应 onPageNotFound

shouldComponentUpdate
页面是否需要更新

componentWillUpdate
页面即将更新

componentDidUpdate
页面更新完毕

componentWillUnmount
页面退出，在微信小程序中这一生命周期方法对应 onUnload

```