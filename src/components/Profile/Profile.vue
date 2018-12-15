<template>
    <div id="profile">
        <login/>
    </div>
</template>

<script>
import login from "./login/login"
export default {
    components:{
        login
    }
}
</script>

<style>
    #profile{
        width: 100%;
        height: 100%;
        overflow-y: scroll;
        background: rgb(245, 245, 245);
        box-sizing: border-box;
        padding: 20px;
    }
</style>