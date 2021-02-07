<template>
    <div>
        <audio class="myaudio" ref='audio' @play="play" @pause="pause" :src="musicUrl" controls autoplay loop></audio>
    </div>
</template>

<style scoped>
  
</style>