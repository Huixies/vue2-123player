<template>
    <div id="nav">
       <svg class="icon">
           <use xlink:href="#icon-music"></use>
        </svg>
        <router-link to="/">搜索</router-link>
        <router-link to="/more">更多</router-link> 
    </div>
</template>

<style scoped>
#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
  color: #5a5a5a;
  padding:0.4rem;
  margin: 0 0.9rem;
}

#nav a.router-link-exact-active {
  color: #1296db;
  border-bottom:1.5px solid   #1296db;
}

.icon{
  position: fixed;
  top: 0.6rem;
  left:0.6rem;
  height: 43px;
  width: 43px;
  z-index: 1;
}
</style>