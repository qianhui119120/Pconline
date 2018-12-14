<template>
        <ul class="jxgoodsContainer">
            <li class="jxgoodsList" v-for="(item,key) in listIndex" :key="item+key">
                <div class="jxcellLeft">
                    <img :src="item.value.cover" >
                </div>
                <div class="jxcellRight">
                    <p class="jxGoodTitle">{{item.value.title}}</p>
                    <p class="jxGoodPrice">{{item.value.price}}</p>
                    <br/>
                    <p>
                    <span class="jxGoodMall">{{item.value.mallName}}</span>
                    <span class="jxGoodMall">|</span>
                    <span class="jxpubDate">
                        {{new Date(item.value.pubDate)}}
                    </span>
                    </p>
                </div>
            </li>
        </ul>
</template>

<script>
export default {
    data(){
        return{
            listIndex:[]
        }
    },
    mounted(){
        this.$http.get("http://localhost:3000/api/home?sectionId=99&pageNo=0&pageSize=30")
        .then((resp)=>{
            // console.log(resp.data.listIndex)
            this.listIndex = resp.data.listIndex;
        })
        // this.$router.push({path:window.location.hash})
    }
}
</script>
