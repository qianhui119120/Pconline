<template>
       <ul class="ycContainer">
           <li class="ycItemList" v-for="(item,key) in ycList" 
           :key="item+key">
               <img :src="item.hdCover" alt="">
               <div class="articleContainer">
                   <div class="pubDate">pubDate</div>
                    <div class="article">
                        <p class="itemTitle">{{item.title}}</p>
                        <p class="itemSynopsis">{{item.synopsis}}</p>
                        <p class="bottomContent">
                            <span>{{item.createName}}</span>
                            <span>{{item.favoriteCount}}</span>
                        </p>
                    </div>
               </div>
           </li>
       </ul>
</template>

<script>
export default {
    data(){
        return{
            ycList:[]
        }
    },
    mounted(){
       this.$http.get("http://localhost:3000/api/home?sectionId=34&pageNo=0&pageSize=30")
       .then((resp)=>{
        //    console.log(resp.data.data);
           this.ycList = resp.data.data;
       })
    }
}
</script>

<style scoped>
    .ycContainer{
        margin-top: 12px;
        width: 100%;
        height: auto;
    }
    .ycItemList{
        width: 100%;
        height: 60%;
        box-sizing: border-box;
        padding: 10px 0;
    }
    .ycItemList img{
        width: 100%;
    }
    .articleContainer{
        background: white;
        padding:10px 5px;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
    .pubDate{
        padding: 10px;
    }
    .itemTitle{
        font-size: 14px;
        font-weight: bold;
    }
    .bottomContent{
        font-size: 12px;
        color: #888686;
        display: flex;
        justify-content: space-between;
    }
    .itemSynopsis{
        width: 100%;
        font-size: 12px;
        color: #888686;
        text-overflow: -o-ellipsis-lastline;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }
</style>