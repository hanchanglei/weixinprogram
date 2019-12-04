//index.js
const app = getApp()

Page({
  data: {
    //全局控制当前的是哪个页面
   currentPage:"recommend",
    publicTitle:'推荐课程',
    tabList: [
      {
        title: "推荐",
        pageTitle:"推荐课程",
        content: "recommend",
        path: "./recommend.png",//图片地址
        activePath: "./recommend-active.png"//选中图片地址
      },
      {
        title: "答题",
        pageTitle: "答题系统",
        content: "message",
        path: "./message.png",//图片地址
        activePath: "./message-active.png"//选中图片地址
      },
      {
        title: "个人",
        pageTitle: "个人信息",
        content: "person",
        path: "person.png",//图片地址
        activePath: "person-active.png"//选中图片地址
      }
    ],

    headerHeight: wx.getMenuButtonBoundingClientRect().bottom+5,
    current:0
  },

  onLoad: function() {
   
  },
  //点击下面的按钮切换事件
  handlechange:function(e){
    //console.log(e)
    const current = this.data.tabList.findIndex(item =>  item.content === e.detail.content)
    //console.log(index)
    this.setData({
      current:current,
      currentPage:e.detail.content,
      publicTitle:this.data.tabList[current].pageTitle
    })
  },
  //滑动上面的进行切换
  swiperchange:function(e){
    //console.log(e)
    const current = e.detail.current;
    this.setData({
      current: current,
      currentPage: this.data.tabList[current].content,
      publicTitle: this.data.tabList[current].pageTitle
    })
  }
})
