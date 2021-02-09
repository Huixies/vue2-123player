<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>
          <van-image
               width="100%"
               height="8rem"
               fit="cover"
               src="https://p1.music.126.net/Tep1PoBVtgJZkghPaagEpg==/109951163312014780.jpg"
             />
        </van-swipe-item>
        <van-swipe-item>
        <van-image
               width="100%"
               height="8rem"
               fit="cover"
               src="https://p1.music.126.net/NTSgymfge_txgeuZy2PJ0w==/109951165641142816.jpg"
             />
        </van-swipe-item>
        <van-swipe-item>
           <van-image
               width="100%"
               height="8rem"
               fit="cover"
               src="https://p2.music.126.net/ZXVf8s8of1Y1MBSKK_HPJg==/109951165687870560.jpg"
             />
        </van-swipe-item>
        <van-swipe-item>
           <van-image
               width="100%"
               height="8rem"
               fit="cover"
               src="https://p2.music.126.net/yFBypMXseGVYsNRFOibsyw==/109951164240566781.jpg"
             />
        </van-swipe-item>
        </van-swipe>

        <van-divider  dashed>新碟上架</van-divider>

        <div>
          <van-loading type="spinner" v-if="musicName.length==0"/>
          <div class="more-content" v-if="item.picUrl || item.name" v-for="(item,index) in musicName" :key="index" @click="toPlayer(item)">
            <div class="more-img"><img :src="item.picUrl" alt=""></div>
            <div class="more-name">{{item.name}}</div>
          </div>
        </div>
        
        <!-- <van-grid  class="grid1" v-for="(item,index) in musicName" :key="index">
        <van-grid-item v-if="item.picUrl || item.name" @click="toPlayer(item)"  :icon="item.picUrl" :text="item.name" />
        </van-grid> -->

    </div>
</template>

<script>
export default {
  data(){
    return {
       musicName:[]
    }
  },
  methods: {
    hotMusic(){
       this.$axios("https://autumnfish.cn/personalized/newsong?limit=39")
        .then(res=>{
          this.musicName = res.data.result;
          // console.log(res.data.result);
        })
        .catch(err=>{
           console.log(err);
         })
    },
    toPlayer(item){
      this.$router.push({path:'/player/'+ item.id});
    }

  },
  created(){
    this.hotMusic()
  }
}
</script>

<style>
 .more-content{
   display: inline-block;
   width: 6rem;
   height: 7rem;
 }
 img{
   width: 4.5rem;
   height:4.5rem;
   border-radius: 10px;
 }
 .more-name{
   font-size: 14px;
   overflow: hidden;
   white-space: nowrap;
   text-overflow: ellipsis;
 }
</style>