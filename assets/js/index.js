$(function () {
  getUserInfo()
  var layer = layui.layer
   // 点击按钮，实现退出功能
   $('#btnLogout').on('click', function() {
    // 提示用户是否确认退出
    layer.confirm('确定退出登录?', { icon: 3, title: '提示' }, function(index) {
      //do something
      // 1. 清空本地存储中的 token
      localStorage.removeItem('token')
      // 2. 重新跳转到登录页面
      location.href = '/login.html'

      // 关闭 confirm 询问框
      layer.close(index)
    })
  })
})
//获取用户基本信息
function getUserInfo() {
  $.ajax({
    method: 'GET',
    url: '/my/userinfo',
    success: function(res) {
      console.log(res);
      if (res.status !== 0) {
        return layui.layer.msg('获取用户信息失败!')
      }
      // 调用 renderAvatar 渲染用户的头像
      renderAvatar(res.data)
    }
  })
}
function  renderAvatar(user) {
var name = user.nickname || user.username
$('#welcome').html('欢迎&nbsp;&nbsp;' + name)
if(user.user_pic !== null) {
  $('.layui-nav-img ')
  .attr('src',user.user_pic)
  .show()
  $('.text-avatar').hide()
} else {
  $('.layui-nav-img').hide()
  var first = name[0].toUpperCase()
  $('.text-avatar')
  .html(first)
  .show()
}
}