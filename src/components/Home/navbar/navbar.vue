<template name="navbar">
    <ul class="navbar">
        <li class="checkList" v-for="(item,key) in checkList"
        :key="item+key" @click="changeComponent(item)"
        :class="navbarName == item.path?'active':''">
        {{item.name}}</li>
    </ul>
</template>

<script>
export default {
    data(){
        return{
            navbarName:"/home/jx",
            checkList:[
                {name:"精选",path:"/home/jx"},
                {name:"优惠",path:"/home/yh"},
                {name:"海淘",path:"/home/ht"},
                {name:"发现",path:"/home/fx"},
                {name:"原创",path:"/home/yc"}
            ]
        }
    },
    methods:{
        changeComponent(item){
            this.$router.push({path:item.path})
            this.navbarName = item.path;
        }
    },
    created(){
        // console.log(window.location.hash.substring(1));
        this.navbarName = window.location.hash.substring(1);
        // this.$router.push({name:this.navbarName})
    }

}
</script>

<style scoped>
    .navbar{
        width: 100%;
        height: 35px;
        padding: 2px;
        margin-top:5%;
        background:white;
        box-sizing: border-box;
        display: flex;
        flex-direction: row;
    }
    .checkList{
        font-size: 14px;
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>