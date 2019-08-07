
<template>
  <!-- <div class="loading" v-if="!isShow">
    <img src="../../assets/img/timg.gif" alt />
  </div> -->
  <div>
    <div class="top">
      <aplayer :audio="audio" :lrcType="1" />
    </div>
    <div class="button">
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>歌曲标题</th>
            <th>歌手</th>
          </tr>
        </thead>
        <tbody>
          <tr class="active" v-for="(item,index) in dataList" :key="item.id" @click="clickmusic(index)">
            <th scope="row">{{index+1}}</th>
            <td>{{item.name}}</td>
            <td>{{item.ar[0].name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";
Vue.use(APlayer);
export default {
  data() {
    return {
        dataid:[],
      dataList: [],
      isShow:false,
      audio: 
        {
          name: "东西（Cover：林俊呈）",
          artist: "纳豆",
          url: "https://cdn.moefe.org/music/mp3/thing.mp3",
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: "https://cdn.moefe.org/music/lrc/thing.lrc"
        }
    };
  },
  created() {
    
    this.getData();
  },
  methods: {
    getData() {
      let birdapi = "https://bird.ioliu.cn/netease/playlist?id=2899785819";
      axios.get(birdapi).then(res => {
        console.log(res),
        this.dataid=res.data.playlist.trackIds,
        this.dataList = res.data.playlist.tracks, 
        this.isShow = true;
      });
    },
    clickmusic(index){
        
        this.audio.name=this.dataList[index].name,
        this.audio.artist=this.dataList[index].ar[0].name,
        this.audio.url="https://music.163.com/song/media/outer/url?id="+this.dataid[index].id+".mp3",
        this.audio.lrc="https://music.163.com/lyric?id="+this.dataid[index].id,
        this.audio.cover="https://music.163.com/album?id="+this.dataid[index].id
    }
  }
};
</script>

<style scoped>
.loading {
  width: 100vw;
}
.loading img {
  width: 100%;
}
</style>
