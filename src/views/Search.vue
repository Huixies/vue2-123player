<template>
  <div>
    <van-search  v-model="value"  @input="searchMusic" placeholder=" 歌名 / 歌手 / 专辑" />
    
    <van-list
    v-if="value"
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
    >
      <van-cell v-for="(item , index) in musicList" :key="index">{{item.name}}/{{item.id}}</van-cell>
    </van-list>

  </div>
</template>

<script>
export default {
  data(){
   return {
     value:'',
     musicList: [],
     loading: false,
     finished: false,
   }
  },
  methods: {
    //歌曲搜索
    searchMusic() {
      if(this.value){
      this.$axios("https://autumnfish.cn/search?keywords=" + this.value)
        .then(res=>{
          this.musicList = res.data.result.songs;
          console.log(this.musicList);
        })
        .catch(err=>{
           console.log(err);
         })
      }
    },
    //展示列表
    onLoad() {
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.musicList.push(this.musicList.length + 1);
        }
        // 加载状态结束
        this.loading = false;
        // 数据全部加载完成
        if (this.musicList.length >= 40) {
          this.finished = true;
        }
      }, 1000);
      }
  } 
  }

</script>