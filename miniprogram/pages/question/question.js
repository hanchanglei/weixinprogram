// pages/question/question.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    key:"",
    questionList:[],
    current:0,//当前第几道题
    total:0,

    //倒计时
    min:15,
    sec:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //console.log(options)
    this.setData(options)
    //请求题目
    wx.cloud.callFunction({
      name:"getQuestion",
      success:res =>{
        //console.log('ok',res)
        this.setData({
          questionList:res.result.answer.data,
          total: res.result.answer.data.length
        })
      }
    })

    //todo显示一个开始答题的界面

    //调用处理时间的方法
    this.data.time = setInterval(()=>{
      this.handleTimeLimit()
    },1000)
    //this.handleTimeLimit()
  },
  confirm: function () {
    wx.showModal({
      title: '退出后记录消失',
      content: "是否退出",
      success: res => {
        console.log(res)
        if (res.confirm) {
          wx.navigateBack({
            delta: 1
          })
        }
      }
    })
  },
  //选择下一题按钮
  next:function(){
    
      if(this.data.current<this.data.total-1){
        this.data.current=this.data.current + 1
        this.setData({
          current: this.data.current
        })
      }
    
    else{
      wx.showToast({
        title: '这已经是最后一题了',
      })
    }
  },
  handleTimeLimit:function(){
    if(this.data.min ==0&& this.data.sec){
      clearInterval(this.data.time)
      wx.showModal({
        title: '时间到了',
        content: '请提交答案',
        success: res =>{
          if(res.confirm){
            //整理答案提交答案
            console.log("时间到了")
          }
        }
      })

      return
    }
    //时间
    this.data.sec--;
    if(this.data.sec<0){
      this.data.min--;
      this.data.sec = 59;
    }
    this.setData({
      min:this.data.min,
      sec:this.data.sec
    })
  },
  //手动滑动切换事件
  change:function(e){
    this.setData({
      current:e.detail.current
    })
  }
})