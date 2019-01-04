//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello',
    userInfo: {
      nickName: 'Hi',
      avatarUrl:'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-0/p280x280/49496948_2032496623496100_2079164445036118016_n.png?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=ab1d6179aeeb9518e3e5067322cf303d&oe=5CD4400A'
    }

  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../product page/products'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
