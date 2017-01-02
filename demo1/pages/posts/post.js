Page({
  data:{

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onLoad");
      var postList = [
        {
          date:"sep",
          title:"浅谈小程序",
          post_image:"/images/4.jpg",
          author_image:"/images/avatar.jpg",
          content:"最近这几天，相信不少人都被微信即将推出的“小程序”刷爆了朋友圈。继订阅号、服务号和企业号之后，微信终于为我们带来了又一重磅功能。有些微妙的是，微信“小程序”总给人一种似曾相识的感觉---如果你熟知Firefox OS、Chrome OS、YUNOS，亦或“轻应用”、H5的话。",
          vote_num:"100",
          col_num:"90",
        },
        {
          date:"sep",
          title:"浅谈小程序",
          post_image:"/images/5.jpg",
          author_image:"/images/avatar1.jpg",
          content:"最近这几天，相信不少人都被微信即将推出的“小程序”刷爆了朋友圈。继订阅号、服务号和企业号之后，微信终于为我们带来了又一重磅功能。有些微妙的是，微信“小程序”总给人一种似曾相识的感觉---如果你熟知Firefox OS、Chrome OS、YUNOS，亦或“轻应用”、H5的话。",
          vote_num:"130",
          col_num:"80",
        }
      ] 
    this.setData({
        postKey:postList
      });
  },
  onReady:function(){
    // 生命周期函数--监听页面初次渲染完成
    console.log("onReady");
  },
  onShow:function(){
    // 生命周期函数--监听页面显示
    console.log("onShow");
  },
  onHide:function(){
    // 生命周期函数--监听页面隐藏
    console.log("onHide");
  },
  onUnload:function(){
    // 生命周期函数--监听页面卸载
    console.log("onUnload");
  },
  onPullDownRefresh: function() {
    // 页面相关事件处理函数--监听用户下拉动作
    console.log("onPullDownRefresh");
  },
  onReachBottom: function() {
    // 页面上拉触底事件的处理函数
    console.log("onReachBottom");
  },
  onShareAppMessage: function() {
    // 用户点击右上角分享
    return {
      title: 'title', // 分享标题
      desc: 'desc', // 分享描述
      path: 'path' // 分享路径
    }
  }
})