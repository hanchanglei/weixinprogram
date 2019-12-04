// components/person/person.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    nickname:"未登录",
    headSrc:"./user-unlogin.png",
    isLogin:false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    upload:function(){
      wx.navigateTo({
        url: '/pages/upload/upload',
      })
    },
    login:function(e){
      const userInfo = e.detail.userInfo
      this.setData({
        nickname:userInfo.nickName,
        headSrc: userInfo.avatarUrl,
        isLogin:true
      })
      //console.log(e)
    },

  //修改用户信息
    setUserInfo:function(){
      // wx.navigateTo({
      //   url: '',
      // })
    }
  },

  lifetimes:{
    attached:function(){
      wx.getUserInfo({
        success: res =>{
          this.setData({
            nickname: res.userInfo.nickName,
            headSrc: res.userInfo.avatarUrl,
            isLogin:true
          })
        },
        // fail:res=>{
        //   wx.showModal({
        //     title: '请登录',
        //     content: '是否登录',
        //     success:res=>{
        //       if(res.confirm){
        //         wx.cloud.callFunction({
        //           name: "login",
        //           success: res => {
        //             //console.log(res)
        //             if (res.userInfo.nickName && res.userInfo.avatarUrl) {
        //               this.setData({
        //                 nickname: res.userInfo.nickName,
        //                 headSrc: res.userInfo.avatarUrl
        //               })
        //             }
        //           }
        //         })
        //       }
        //     }
        //   })
        //   //调用云函数获取用户信息
        //   // wx.cloud.callFunction({
        //   //   name:"login",
        //   //   success:res=>{
        //   //     //console.log(res)
        //   //     if (res.userInfo.nickName && res.userInfo.avatarUrl){
        //   //       this.setData({
        //   //         nickname: res.userInfo.nickName,
        //   //         headSrc:res.userInfo.avatarUrl
        //   //       })
        //   //     }
        //   //   }
        //   // })
        // }
      })
    }
  }
})
