// components/recommend/list/list.js
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
    lessonList:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    lessonDetail:function(e){
      console.log(e)
      const lessonId = e.currentTarget.dataset.lessonid
      wx.navigateTo({
        url: '/pages/course/course?lessonId='+lessonId,
      })
    }
  },
  lifetimes:{
    attached:function(){
      let promiseList = []
      for(let i=1;i<3;i++){
        const url = `https://open.shiguangkey.com/api/m/recommend/getcourse?terminalType=5&imei=dc8bcd2f-b621-8c35-a203-60d313ad5d48&pageIndex=${i}&pageSize=4&localCateId=&id=850050a5-5603-0374-6191-caffe7a99ba4&oldUuid=9e8ecf4c-7ae8-baa7-6188-ee381be7a173`;
        promiseList.push(new Promise(function(resolve,rej){
          wx.request({
            url: url,
            success:res => {
              resolve(res.data.data.results)
            }
          })
        }))
      //console.log(promiseList)
    }
    Promise.all(promiseList).then((res)=>{
      console.log(res)
      this.setData({
        lessonList:res
      })
    })
  }}
})
