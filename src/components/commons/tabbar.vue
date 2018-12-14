<template>
    <div id="tabbar">
        <ul class="tab">
            <li v-for="(item,key) in tabs" :key="item+key" 
            @click="renderView(item)" :class="name==item.name?'active':''">
                {{item.title}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return{
            name:'首页',
            tabs:[
                {path:"/home",title:"首页",name:"首页"},
                {path:"/category",title:"分类",name:"分类"},
                {path:"/profile",title:"我的",name:"我的"}
            ]
        }
    },
    methods:{
        renderView(item){
            this.$router.push({path:item.path});
            this.name=item.name
        }
    },
    // mounted(){
    //     this.$router.push({name:this.name})
    // }
}
</script>

<style>
    #tabbar{
        border-top: 1px solid #ccc;
        width: 100%;
        height: 65px;
        background:rgb(255,255,255);
        position: fixed;
        bottom: 0;
    }
    .tab{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
    }
    .tab li{
        flex: 1;
        text-align: center;
        line-height: 65px;
        box-sizing: border-box;
    }
    .active{
        border-bottom: 2px solid orange;
        color: red;
    }
</style>