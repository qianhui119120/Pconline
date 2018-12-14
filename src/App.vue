<template>
  <div id="app">
    <router-view></router-view>
   <tabbar/>
  </div>
</template>

<script>
import tabbar from './components/commons/tabbar'

export default {
  components:{tabbar},
}
</script>

<style>
*{
  padding: 0;
  margin: 0;
  list-style: none;
}
#app {
 position: absolute;
 top: 0;
 left: 0;
 right: 0;
 bottom: 64px;
 overflow-y: scroll;
}

</style>
