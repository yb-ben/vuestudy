<template>
    <div>
    <h1>文章页面</h1>
    <button v-on:click="func1">点击</button>
    <transition name="fade">
        <p v-show="show" v-bind:style="styleObj">动画实例</p>
    </transition>
    </div>
</template>
<style>
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.fade-enter-active, .fade-leave-active {
    transition: opacity 2s
}
.fade-enter, .fade-leave-to /* .fade-leave-active, 2.1.8 版本以下 */ {
    opacity: 0
}
</style>
<script>


export default {
    name : 'Article',

    data:function(){
        return {
            show: false,
            styleObj:{
                fontSize:'30px',
                color:'red'
            },
            info:null,
            counter:1
        }
    },
    methods:{
        func1:function(){
            this.show = !this.show;
            return true;
        }
        
    },
    mounted:function(){
        // this.$axios.get('https://www.runoob.com/try/ajax/json_demo.json')
        // .then(resp =>{
        //     console.log(resp)
        // }).catch(resp =>{
        //     console.log(resp)
        // });

       
    }
  
}
</script>