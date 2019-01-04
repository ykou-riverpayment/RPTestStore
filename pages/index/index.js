//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
<<<<<<< HEAD
    motto: 'Hello',
    userInfo: {
      nickName: 'Hi',
      avatarUrl:'https://scontent-lax3-2.xx.fbcdn.net/v/t1.15752-0/p280x280/49496948_2032496623496100_2079164445036118016_n.png?_nc_cat=106&_nc_ht=scontent-lax3-2.xx&oh=ab1d6179aeeb9518e3e5067322cf303d&oe=5CD4400A'
    }
=======
    navIcons: [
      {
        type: 'search',
        bindtap: ""
      },
      {
        type: 'success',
        bindtap: "categoryToggle"
      },
      {
        type: "clear",
        bindtap: "navigateToCart"
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
>>>>>>> master
  },
  //事件处理函数
  navigateToCart: function() {
    wx.navigateTo({
<<<<<<< HEAD
      url: '../product page/products'
=======
      url: '../shopping cart/cart'
>>>>>>> master
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
