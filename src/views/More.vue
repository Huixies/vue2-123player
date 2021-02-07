<template>
    <div>
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item>1</van-swipe-item>
        <van-swipe-item>2</van-swipe-item>
        <van-swipe-item>3</van-swipe-item>
        <van-swipe-item>4</van-swipe-item>
        </van-swipe>

        <van-divider  dashed>新碟上架</van-divider>
        <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>

        <van-divider  dashed>推荐歌曲</van-divider>
        <van-grid :gutter="10">
        <van-grid-item v-for="value in 8" :key="value" icon="photo-o" text="文字" />
        </van-grid>
    </div>
</template>

<style>
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
</style>