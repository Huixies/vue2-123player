<template>
    <div>
        <audio class="myaudio" ref='audio' @play="play()" @pause="pause()" :src="musicUrl" controls autoplay loop></audio>
    </div>
</template>

<script>
export default {
data(){
   return {
     musicUrl: null,
     isPlaying: '',
   }
  },
  methods: {
    getMusicUrl(){
      
       this.id =  this.$route.params.id;
      //  console.log(this.id);
       this.$axios("https://autumnfish.cn/song/url?id=" + this.id)
        .then(res =>{
        //   console.log(res.data.data[0].url);
         this.musicUrl = res.data.data[0].url;
        //  console.log(this.musicUrl);
        })
         .catch(err=>{
           console.log(err);
         })
    },
    play(){
      // console.log("play");
      this.isPlaying = true;
    },
    pause(){
      // console.log("pause");
      this.isPlaying = false;
    },

  },
  Create() {
    this.getMusicUrl()
  }
}
</script>

<style scoped>
  .myaudio {
    width: 100%;
    outline: none;
    background: #f1f3f4;
    vertical-align:bottom;  
    /* 底部消除缝隙 */
  
}
</style>