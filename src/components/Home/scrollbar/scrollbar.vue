<template>
    <div class="wrapper">
        <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
            <swiper-slide v-for="(item,key) in swiperList" :key="item+key">
                <img class="swiper-img" :src="item.imageUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    export default{
        name:'HomeSwiper',
        data(){
            return {
				notNextTick: true,
                // 使用swiper
                swiperOption:{
                    // 小圆点
                    pagination:'.swiper-pagination',
                    // 轮播无缝切换
                    loop:true,
                    // 自动轮播
					autoplay:3000,
					direction: 'horizontal',
                },
                swiperList:[]
            }
		},
		// computed: {
		// 	swiper() {
		// 		// console.log(this.$refs.mySwiper.swiper)
		// 		return this.$refs.mySwiper.swiper
		// 	}
		// },
		mounted(){
			this.$http.get('http://localhost:3000/zh-cn/api/focus')
			.then((resp)=>{
				this.swiperList = resp.data.focus;
				// console.log(resp.data.focus);
			})
			// this.swiper.slideNext(10, 3000, true);
		}
    }
</script>

<style>
    .swiper-pagination-bullet-active{
        background:rgb(20, 17, 211);
    }
    .wrapper{
        background:white;
        width:100%;
        height:31.25%;
    }
    .swiper-img{
        width:100%;
    }
</style>

