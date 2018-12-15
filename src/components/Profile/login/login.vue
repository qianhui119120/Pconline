<template>
    <div id="login" @click="jumpToLoginPage()">
       <div class="devilfish"></div>
       <div class="loginIn">
           <p class="loginInBtn">点击登录</p>
           <p class="loginInCoin">登陆后可赚金币兑换礼品</p>
       </div>
       <router-view></router-view>
    </div>
</template>

<script>
export default {
    data(){
        return{
            path:"/profile/loginPage"
        }
    },
    methods:{
        jumpToLoginPage(){
            this.$router.push({path:this.path})
        }
    }
}
</script>

<style scoped>
    #login{
        width: 100%;
        height: 30%;
        background: white;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
    .devilfish{
        width: 30%;
        height: 58%;
        border-radius: 50%;
        background:rgb(155, 151, 151) url(../../../assets/devilfish.png) no-repeat 45% 50%;
        background-size: 65%;
    }
    .loginIn{
        width: 50%;
        height: 45%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
    .loginInBtn{
        font-size: 15px;
        font-weight: bold;
    }
    .loginInCoin{
        font-size: 13px;
        color: #A2A0A0;
    }
</style>