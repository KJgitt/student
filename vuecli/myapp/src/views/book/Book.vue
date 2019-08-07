<template>
  <div>
    <swiper class="sswiper" :options="swiperOption">
      <swiper-slide class="active" v-for="item in dataList" :key="item.id">
        <img class="img1" :src="'https://images.weserv.nl/?url='+item.cover.url" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>
<script>
import "swiper/dist/css/swiper.css";

import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  components: {
    swiper,
    swiperSlide
  },
  data() {
    return {
      dataList: [],
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  created() {
    this.getData();
  },
  methods: {
    getData() {
      let birdapi = "https://bird.ioliu.cn/v2?url=";
      let urlapi = `https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=10`;
      axios.get(birdapi + urlapi).then(res => {
        console.log(res), 
        this.dataList = res.data.subject_collection_items
      });
    }
  }
};
</script>
<style scoped>

.img1{
     width: 2rem;
  height: 3rem;
    height: 100%;
}
</style>
