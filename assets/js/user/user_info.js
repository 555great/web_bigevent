$(function () {


initUserInfo()
function initUserInfo () {
  $.ajax({
    method:'GET',
    url:'/my/userinfo',
    success: function (res) {
      if (res.status !== 0) {
        return layer.msg('获取用户信息失败!')
      }
      console.log(res);
      formData.val('formUserInfo',res.formData)
    }
  })
}
//重置表单的数据
$('#btnReset').on('click' , function (e) {
  //阻止表单的重置效果
  e.preventDefault()
  initUserInfo()
})
})