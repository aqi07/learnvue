<template>
  <div id="app">
    <input type="text"  @keyup.enter="specifiName($event)" /> 
    <h2>{{info}}</h2>
    <img alt="Vue logo" src="https://dpic.tiankong.com/nh/8k/QJ8480392495.jpg?x-oss-process=style/794ws">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import axios from 'axios'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  data(){
    return{
      info:'',
      val:''


    }
  },
  methods:{
    specifiName(e) {
        this.val=e.target.value
        console.log(this.val)
  axios.get('/api/translate', {
    params: {
      doctype: 'json',
      type: 'AUTO',
      i:this.val
    }
  })
    .then(response => {
      this.info = response.data.translateResult[0][0].tgt
      // this.info=response.data.translateResult[0][0].tgt;
      console.log(this.info)
    })
    }

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
  margin-top: 60px;
}
</style>
