<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide @click.native="clickHandle(item.id)" class="swiper-item" v-for="item in dataList" :key="item.id">
          <img :src="'https://images.weserv.nl/?url='+item.cover.url" alt="">
          <p>{{item.title}}</p>
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
  data() {
    return {
        dataList:[],
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
  methods: {
      clickHandle(id){
          this.$router.push({
              name:"bookdetail",
              params:{
                  id
              }
          })
      },
      getData(){
          let birdapi = "https://bird.ioliu.cn/v2?url=";
          let bookUrl = "https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=20";
        axios.get(birdapi+bookUrl).then((res)=>{
            console.log(res)
            this.dataList = res.data.subject_collection_items;
        })
      }
  },
  components: {
    swiper,
    swiperSlide
  },
  created() {
    let obj = {
      title: "书籍",
      navName: "book"
    };
    this.$emit("changeActive", obj);
    this.getData();
  }
};
</script>
<style scoped>
.swiper-item{
    width: 2rem;
    height: 5rem;
}
.swiper-item img{
    width: 100%;
}
.swiper-item p{
    font-size: .4rem;
}
</style>
