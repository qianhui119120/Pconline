<template>
        <ul class="jxgoodsContainer">
            <li class="jxgoodsList" v-for="(item,key) in listIndex" :key="item+key">
                <div class="jxcellLeft">
                    <img :src="item.cover" >
                </div>
                <div class="jxcellRight">
                    <p class="jxGoodTitle">{{item.title}}</p>
                    <p class="jxGoodPrice">{{item.price}}</p>
                    <br/>
                    <p>
                    <span class="jxGoodMall">{{item.mallName}}</span>
                    <span class="jxGoodMall">|</span>
                    <span class="jxpubDate">
                        {{new Date(item.pubDate)}}
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
        this.$http.get("http://localhost:3000/api/home?sectionId=0&pageNo=0&pageSize=30")
        .then((resp)=>{
            // console.log(resp.data.data)
            this.listIndex = resp.data.data;
        })
    }
}
</script>
