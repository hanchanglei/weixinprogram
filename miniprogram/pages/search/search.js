// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    publicTitle:"搜索页"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    this.setData({
      publicTitle:options.keywords
    })
  },
  back:function(){
    wx.navigateBack({
      delta: 1
    })
  }
})