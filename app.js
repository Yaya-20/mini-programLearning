// app.js
// 注册小程序
App({
  onLaunch() { // 小程序初始化完成时执行 
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    console.log("onLaunch")
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo
              console.log(res);
              
              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  globalData: {
    userInfo: null,
    age: 18
  },
  onShow(options) { // 小程序显示出来时执行
    console.log('onShow', options);
    setTimeout(() => {
      throw new Error('333')
    }, 3000)
    
    
  },
  onHide() { // 小程序隐藏时执行
    console.log('onHide')
  },
  onError(err) { // 小程序产生一些错误时
    console.log(err);
    
  }
})
