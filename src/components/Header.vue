<template>
    <div id="nav">
        <router-link to="/">搜索</router-link> |
        <router-link to="/player">播放</router-link> |
        <router-link to="/more">更多</router-link> |
        <router-link to="/talk">评论</router-link>
    </div>
</template>

<style scoped>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>