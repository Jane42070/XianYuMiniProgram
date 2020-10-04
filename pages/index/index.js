//index.js
//获取应用实例
const app = getApp()

// 引入用来发送请求的方法
import { request } from "../../request/index.js"

Page({
  data: {
    // 轮播图数组
    swiperList: [
      "/images/swiper-1.jpg",
      "/images/swiper-2.jpg",
      "/images/swiper-3.jpg",
      "/images/swiper-4.jpg",
    ],
    swiperPic: [],
    // 分类数据
    categoryList: [
      {
        "title": "二手手机",
        "url": "",
        "image_src": "/icons/phone.png"
      },
      {
        "title": "二手数码",
        "url": "",
        "image_src": "/icons/digital.png"
      },
      {
        "title": "二手图书",
        "url": "",
        "image_src": "/icons/book.png"
      },
      {
        "title": "其他分类",
        "url": "",
        "image_src": "/icons/category.png"
      },
    ],
    // 楼层数据
    floorList: [],
  },
  // 页面开始加载就会触发的事件
  onLoad: function (options) {
    // 发送异步请求获取轮播图数据
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success: (result) => {
    //     this.setData({
    //       swiperPic: result.data.message
    //     })
    //   }
    // })
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'
    }).then(result => {
      this.setData({
        swiperPic: result.data.message
      })
    })
    request({
      url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/floordata'
    }).then(result => {
      this.setData({
        floorList: result.data.message
      })
    })
  }
})
