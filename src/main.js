import Vue from 'vue'
import App from './App.vue'
import '/src/css/style.css'
import '/src/css/reset.css'

Vue.config.productionTip = false

// app 이라는 아이디를 가진 엘리먼트에 뷰를 그림
new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
