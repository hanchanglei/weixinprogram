// pages/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courseId:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const courseId = options.lessonId
    //console.log(options)
    this.setData({
      courseId:courseId
    })
  },

  
})