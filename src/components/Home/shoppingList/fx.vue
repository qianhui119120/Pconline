<template>
        <ul class="fxContainer">
            <li class="fxGoodList" v-for="(item,key) in goodsList" :key="item+key">
                <img class="showImg" :src="item.cover" alt="">
                <p class="fxTitle">{{item.title}}</p>
                <p class="fxMallname">
                    <span>{{item.mallName}}</span>
                    <span>
                        {{new Date(item.pubDate).getMinutes()}}
                    </span>
                </p>
            </li>
        </ul>
</template>
<script>
export default {
    data(){
        return{
            goodsList:[]
        }
    },
    mounted(){
        this.$http.get("http://localhost:3000/api/home?sectionId=2&pageSize=30")
        .then((resp)=>{
            // console.log(resp.data.data);
            this.goodsList = resp.data.data;
        })
    },
    created(){
        console.log(window.location);
    }
}
</script>

<style scoped>
    .fxContainer{
        margin-top: 12px;
        background: white;
        width: 100%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .fxGoodList{
        width: 50%;
        height: 230px;
        box-sizing: border-box;
        padding:10px 5px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }
    .showImg{
        height: 58%;
    }
    .fxTitle{
        width: 90%;
        height: 35px;
        text-align: center;
        font-size: 15px;
        font-weight: bold;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
    .fxMallname{
        width: 80%;
        font-size: 12px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        font-size: 14px;
        color: rgb(114, 111, 111);
    }
    
</style>