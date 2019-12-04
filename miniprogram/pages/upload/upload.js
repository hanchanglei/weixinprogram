// pages/upload/upload.js
//页面的数据结构
// const problem ={
//   description:"What is the result of this expression? (or multiple ones)",
//   code:`[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]`,
//   selection:[
//     //若干个
//     {
//       value:"an error",
//       num:"A"
//     },
//     {
//       value: "an error",
//       num: "B"
//     }
//   ],
//   answer:""
// }

Page({

  /**
   * 页面的初始数据
   */
  data: {
    description:"What is the result of this expression? (or multiple ones)",
    code:"[ [3,2,1].reduce(Math.pow), [].reduce(Math.pow) ]",
    selection:[
      {
        num:0,
        value:"an error"
      },
      {
        num:1,
        value:"[9, 0]"
      },
      {
        num: 2,
        value: "[9, NaN]"
      },
      {
        num: 3,
        value: "[9, undefined]"
      }
    ],
    answer:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  add:function(){
    if(this.data.selection.length>=4){
      return
    }
    this.data.selection.push({
      num:this.data.selection.length,
      value:""
    })
    this.setData({
      selection:this.data.selection
    })
  },
  descriptionInput:function(e){
    //console.log(e)
    this.setData({
      description:e.detail.value
    })
  },
  codeInput:function(e){
    this.setData({
      code: e.detail.value
    })
  },
  chooseInput:function(e){
    //console.log(e)
    const num = e.target.dataset.num;
    const value = e.detail.value;
    this.data.selection[num].value = value;

    //需要setData的
    this.setData({
      selection:this.data.selection
    })
  },
  change:function(e){
    this.setData({
      answer: this.data.selection[e.detail.value].value
    })
  },

  //提交前的逻辑处理
  submit:function(){
    if(!this.data.description){
      wx.showToast({
        title: '题目描述不能为空',
      })
      return
    }
    if (this.data.selection.some(item => item.value == "")){
      wx.showToast({
        title: '有答案选项为空',
      })
    }

    if(!this.data.answer){
      wx.showToast({
        title: '请选择正确答案',
      })
    }

    //提交数据
    //console.log(this.data)
    wx.cloud.callFunction({
     name: "uploadQuestion",
     data:this.data,
     success:res=>{
       console.log(res)
     }
    })
  },
  confirm: function () {
    wx.showModal({
      title: '有内容尚未完成是否退出',
      content:"是否退出",
      success:res=>{
        console.log(res)
        if(res.confirm){
          wx.navigateBack({
            delta:1
          })
        }
      }
    })
  }
})