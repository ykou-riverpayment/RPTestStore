//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    navIcons: [
      {
        type: 'search',
        bindtap: ""
      },
      {
        type: 'success',
        bindtap: "navigateToCart"
      },
      {
        type: "clear",
        bindtap: "categoryToggle"
      }
    ],
    categoryList: {
      open: false,
      categories: [
        {
          title: "shoes",
          link: "../product page/products"
        },
        {
          title: "tops",
          link: "../product page/products"
        },
        {
          title: "bottoms",
          link: "../product page/products"
        }
      ]
    },
    album: [
      {
        src: "../../utils/imgs/cover1.png",
        width: "750rpx" 
      }
    ],
    collections: [
      {
        title: "Midnight Wishes",
        src: "../../utils/imgs/cover2.png",
        height: "690rpx",
        description: "The gems and jewels to start the year in glittering fashion",
        link: "SHOP JEWELLERY"
      }
    ]
  },
  //事件处理函数
  navigateToCart: function() {
    wx.navigateTo({

      url: '../product page/products'

    })
  },
  categoryToggle: function () {
    var list = this.data.categoryList;
    list.open = !list.open;
    this.setData({
      categoryList: list
    });
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
