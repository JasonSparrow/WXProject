var postData = require('../../data/post-data.js')

Page({
  data:{

  },
  onLoad:function(options){
    // 生命周期函数--监听页面加载
    console.log("onLoad");
      
    this.setData({
        postKey:postData.postList
      });
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postid;
    console.log(postId);
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})