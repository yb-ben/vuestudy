<template>
    <div class="user">
        <h2>User {{ $route.params.id }}</h2>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name:'User',
    data:()=>({

    }),  
   watch:{
    $route:{
        handler:function(to,from){
            console.log(to,from)
        },
        deep:true,
         immediate: true
    }
  }
}
</script>