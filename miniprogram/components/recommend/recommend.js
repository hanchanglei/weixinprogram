// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  // 轮播图数据接口
//https://open.shiguangkey.com/api/m/index/listBanner?terminalType=5&imei=dc8bcd2f-b621-8c35-a203-60d313ad5d48
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    list:[],//课程列表
    swiperList:[]//轮播列表
  },

  /**
   * 组件的方法列表
   */
  methods: {
    jump:function(){
      wx.navigateTo({
        url: '/pages/search/search',
      })
    },
    search:function(e){
      //console.log(e)
      const keywords = e.currentTarget.dataset.keywords;
      wx.navigateTo({
        url: '/pages/search/search?keywords='+keywords,
      })
    }
  },
  lifetimes:{
    attached:function(){
      //分类选择
      wx.request({
        url: 'https://open.shiguangkey.com/api/m/index/category?terminalType=5&imei=dc8bcd2f-b621-8c35-a203-60d313ad5d48',
        success:res => {
          //console.log(res)
          this.setData({
            list: res.data.data.categoryList
          })
          //console.log(this.data.list)
        }
      }),

        wx.request({
        url: 'https://open.shiguangkey.com/api/m/index/listBanner?terminalType=5&imei=dc8bcd2f-b621-8c35-a203-60d313ad5d48',
          success: res => {
            console.log(res)
            this.setData({
              swiperList: res.data.data
            })
            //console.log(this.data.list)
          }
        })
    }
  }
})
