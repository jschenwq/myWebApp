<template>
  <div class="hello_tem">
     <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides">
           <img :src="slide.imgurl"/>
           <div><span>{{ slide.title }}</span></div>
        </swiper-slide>
        <!--<div class="swiper-pagination" slot="pagination"></div>-->
      </swiper>
      <ul>

      </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import { swiper, swiperSlide } from 'vue-awesome-swiper'

require('swiper/dist/css/swiper.css');
Vue.use(VueAwesomeSwiper);

export default {
  name: 'hometel',
  props: {
    inputValue: String
  },
  data() {
     return {
      imgUrl : require('../../assets/logo.png'),
       swiperOption: {
         setWrapperSize :false,
         pagination : '.swiper-pagination',
         paginationClickable :true,
         mousewheelControl : true,
         observeParents:true,
       },
       swiperSlides: [{imgurl:require('../../assets/temp/advantage_financial.jpg'),title:'专业采购团队'},
       {imgurl:require('../../assets/temp/advantage_logistics.jpg'),title:'正规物流合作'},
       {imgurl:require('../../assets/temp/advantage_team.jpg'),title:'提供金融服务'}]
     }
   }
}
</script>
