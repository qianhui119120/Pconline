<template>
    <div class="wrapper">
        <swiper :options="swiperOption"  ref="mySwiper" v-if="swiperList.length>0">
            <swiper-slide v-for="(item,key) in swiperList" :key="item+key" >
                <img class="swiper-img" :src="item.imageUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
import {swiper, swiperSlide} from 'vue-awesome-swiper'
    export default{
        name:'HomeSwiper',
         components: {
            swiper,
            swiperSlide,
        },
        data(){
            return {
                swiperList:[],
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    },
                    slidesPerView: 1,
                    autoplay: {
                        delay: 1000,
                        disableOnInteraction: false
                    },
                    spaceBetween: 30,
                    loop: true
                 
            }
            }
		},
		mounted(){
			this.$http.get('http://localhost:3000/zh-cn/api/focus')
			.then((resp)=>{
			this.swiperList =  resp.data.focus
			})
		}
    }
</script>

<style>
@import '../../../../node_modules/swiper/dist/css/swiper.css';

    .swiper-pagination{
        width: 100%;
        height: 10%;
        /* position: absolute;
        top: 90%; */
    }
    .swiper-pagination-bullet{
        border-radius: 0;
    }
    .swiper-pagination-bullet-active{
        background:rgb(221, 78, 11);
    }
    .wrapper{
        position: relative;
        background:white;
        width:100%;
        height:31.25%;
    }
    .swiper-img{
        width:100%;
    }
</style>

