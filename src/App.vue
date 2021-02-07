<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer class="footer"/>
  </div>
</template>

<script>
import Header from './components/Header';
import Footer from './components/Footer';
export default {
  components:{
    Header,Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}
.footer{
    position: fixed;
    bottom: 0;
    margin: 0 auto;
    left: 0;
    right: 0;
}


</style>
