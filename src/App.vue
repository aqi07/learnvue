<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'


export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data(){
    return{
      info:{}

    }
  },
mounted: function(){axios.get('/api/?&doctype=json&type=AUTO&i=%E8%B5%B0%E8%B7%AF').then(response => (this.info = response))}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
