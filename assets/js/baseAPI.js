//每次调用$.get()或$.post()或$.ajax()的时候会先调用ajaxPrefillter这个函数
//在这个函数中，可以拿我们给Ajax提供的对象
$.ajaxPrefilter(function(options) {
  // 在发起真正的 Ajax 请求之前，统一拼接请求的根路径
  options.url = 'http://www.liulongbin.top:3007' + options.url
  console.log(options.url);
})
