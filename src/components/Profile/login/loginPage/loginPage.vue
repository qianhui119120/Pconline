<template>
    <div id="loginPage">
        <closeOrLogin/>
        <userInput/>
        <ul class="thirdLogin">
            <li></li>
        </ul>
    </div>
</template>

<script>
import closeOrLogin from "./closeOrLogin/closeOrLogin"
import userInput from "./userInput/userInput"
export default {
    components:{
        closeOrLogin,
        userInput
    }
}
</script>

<style scoped>
    #loginPage{
        box-sizing: border-box;
        padding: 20px;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: white;
    }
   
</style>
