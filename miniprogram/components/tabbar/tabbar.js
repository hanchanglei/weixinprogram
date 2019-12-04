// components/tabbar/tabbar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    current:String,
    tabbarList:Array
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    change:function(e){
      //console.log(e)
      // this.setData({
      //   current:e.currentTarget.dataset.content
      // })
      //不能再组件中渲染  全局拿不到咋做
      this.triggerEvent("change",e.currentTarget.dataset)
    }
  }
})
