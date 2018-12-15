<template>
     <div class="closeOrLogin">
        <span @click="closeUserInput">&times;</span>
        <span>登陆</span>
        <span>注册</span>
    </div>
</template>

<script>
export default {
    methods:{
        closeUserInput(){
            console.log("test")
            this.$router.push({path:"/home"})
        }
    }
}
</script>

<style scoped>
    .closeOrLogin{
        width: 100%;
        height: 5%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .closeOrLogin>span:nth-child(1){
        font-size: 20px;
    }
    .closeOrLogin>span:nth-child(2){
        font-size: 20px;
        font-weight: bold;
    }
     .closeOrLogin>span:nth-child(3){
        font-weight: bold;
    }
</style>
