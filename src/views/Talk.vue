<template>
    <div>
        <van-skeleton title avatar :row="3" :loading="loading">
            <div>实际内容</div>
        </van-skeleton>
    </div>
</template>

<script>
export default {
    data() {
    return {
      loading: true,
    };
  },
  mounted() {
    this.loading = false;
  },
}
</script>