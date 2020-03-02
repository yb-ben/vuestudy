<style>
    .class1{
        background-color: black;
        color:white;
    }
</style>


<template>
  <div id="test">
    <h1 v-on:click="func1">{{ msg | func2 }}</h1>
   
    <input v-model="msg" v-focus>
   <div v-if="seen" v-bind:class="{'class1': c1}">{{ msg }}</div>
    <p>{{ reversedMsg }}</p>
    <p>watch:{{ watchval }}</p>
    <p v-for="i in parentMsg" :key="i">ParentMsg: {{ i }}</p>

  </div>
</template>
 
<script>

export default {
 
  data: function() {
    return {
      msg: "hello,world",
      c1: true,
      seen: false,
      sites:[
          {name : 'Runoob'},
          {name : 'Google'},
          {name : 'Taobal'}
      ],
      watchval:''
    };
  },
  methods:{
      func1:function(){
        return this.msg = this.msg + '!!!!!!'; 
      }
  },
  filters:{
      func2:function(value){
     
          if(value === '')
            return '';
          return value.charAt(0).toUpperCase() + value.slice(1);
      }
  },
  computed:{
      reversedMsg:function(){
          return this.msg.split('').reverse().join('');
      }
  },
  watch:{
      reversedMsg(val){
          this.watchval = val;
      }
  },
  props:['parentMsg'],

  directives:{
      focus:{
          inserted:function(el,binding){
            console.log(binding);
            el.focus();
          }
      }
  }
};
</script>