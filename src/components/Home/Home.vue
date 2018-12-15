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
    },
    methods:{
        scrollEvent(){
            var top = window.scrollY;
            console.log(top);
            var navbar = document.querySelectorAll(".navbar")[0];
            var oTop = navbar.offsetTop;
            // console.log(navbar);
            // console.log(oTop)
            // if (window.offsetTop>oTop) {
                
            // }
        }
    },
    mounted(){
        addEventListener("scroll",this.scrollEvent)
        this.scrollEvent();
    }
  }
</script>

<style scoped>
    #home{
        /* background: #f1f1f1; */
        width: 100%;
        height: auto;
    }
</style>