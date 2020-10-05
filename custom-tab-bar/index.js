Component({
    data: {
        selected: 0,
        selectedColor: "#000",
        color: "#272727",
        list: [
            {
                pagePath: "/pages/index/index",
                text: "首页",
                iconPath: "/icons/home.png",
                selectedIconPath: "/icons/home-s.png"
            },
            {
                pagePath: "/pages/trend/index",
                text: "动态",
                iconPath: "/icons/trend.png",
                selectedIconPath: "/icons/trend-s.png"
            },
            {
                pagePath: "/pages/announce/index",
                text: "发布",
                iconPath: "/icons/release.png",
                selectedIconPath: "/icons/release-s.png"
            },
            {
                pagePath: "/pages/cart/index",
                text: "购物车",
                iconPath: "/icons/cart.png",
                selectedIconPath: "/icons/cart-s.png"
            },
            {
                pagePath: "/pages/user/index",
                text: "我的",
                iconPath: "/icons/user.png",
                selectedIconPath: "/icons/user-s.png"
            }
        ]
    },
    methods: {
        switchTab(e) {
          const data = e.currentTarget.dataset
          const url = data.path
          wx.switchTab({url})
          this.setData({
            selected: data.index
          })
        }
    }
})