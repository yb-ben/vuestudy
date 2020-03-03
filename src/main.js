import Vue from 'vue'
import App from './App.vue'
import Test from './components/Test.vue'
import router from './router'
import ViewUI from 'view-design'
import axios from 'axios'
import store from "./store";

Vue.use(ViewUI)
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.component('Test',Test);

let mixin = {
  methods:{
    helloworld:function(){
      console.log('called mix method Helloworld!!!');
    }
  }
}
Vue.mixin({

  created:function(){
    console.log('global mixin function created!!')
  }
});
 new Vue({
  router,store,
  render: h => h(App),
  mixins:[mixin],
  data:{
    counter:15
  },
  
}).$mount('#app');
//
// setInterval(function(){
//   vm.counter += 20;
// },5000)
// vm.$watch('counter',function(nval,oval){
//   console.log('计数器值的变化 :' + oval + ' 变为 ' + nval + '!');
//
// })
