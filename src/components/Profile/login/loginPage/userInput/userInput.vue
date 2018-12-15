<template>
    <div class="userInput">
        <span>
            <input class="userName" v-model="username" type="text" placeholder="输入太平洋通行证账号">
        </span>
        <span>
            <input class="userPassword" v-model="password" type="password" placeholder="输入密码">
        </span>
        <p class="acceptToLogin"><span></span>我同意<span>"太平洋网络服务条款及使用协议"</span></p>
        <button @click="loginToProFile" class="btnToLogin">登陆</button>
    </div>
</template>

<script>
export default {
   data(){
       return{
           username:"qh",
           password:"123"
       }
   },
   methods:{
       loginToProFile(){
           if (this.username == 'qh'&& this.password == '123') {
               console.log("btn");
               this.$router.push({path:"/home/jx"})
           }
       }
   }
}
</script>

<style scoped>
    .userInput{
        width: 100%;
        height: 50%;
        box-sizing: border-box;
        padding: 10% 4%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }
    .userInput>span{
        width: 100%;
        height: 35%;
    }
     .userInput input{
         width: 100%;
         height: 70%;
         border: 0;
         outline: 0;
         border-bottom: 1px solid #ccc;
     }
     .acceptToLogin{
         height: 15%;
         font-size: 12px;
         color: rgb(153, 147, 147);
     }
     .acceptToLogin>span:nth-child(2){
         color: red;
     }
     .btnToLogin{
         height: 25%;
         border: 0;
         outline: 0;
         background: rgb(255, 94, 94);
         border-radius: 5px;
         color: white;
         font-size: 20px;
         font-weight: bold;
     }
</style>
