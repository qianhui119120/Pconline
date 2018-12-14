<template>
    <div id="home">
        <slot name="scrollbar">
            <scrollbar/>
        </slot>
        <slot name="navbar">
            <navbar/>
        </slot>
        <slot >
            <router-view></router-view>
        </slot>
    </div>
</template>
<script>
import scrollbar from "./scrollbar/scrollbar"
import navbar from "./navbar/navbar"

  export default {
   components:{
       scrollbar,
       navbar
    }
  }
</script>

<style scoped>
    #home{
        background: #f1f1f1;
        width: 100%;
        height: auto;
    }
</style>