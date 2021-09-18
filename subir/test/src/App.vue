<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <input type="text" v-model="nombre"/>
    <Hello :name = "this.nombre" greeting = "what's up?" />
     <Hello v-bind:name = "this.nombre" greeting = "what's up?" /> -->
    <!-- cuando es de forma dinamica se necesitan los 2 puntos -->
    Clave del equipo a consultar : <input type="text" v-model="Equipo"/>
    <InfoEquipo v-bind:Team="this.Equipo"/>
    
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
//import Hello from './components/Hello'

import InfoEquipo from './components/InfoEquipo'

export default {
 // name: 'App',
  data(){
    return{
      nombre:'',
      Equipo:'',
    

    }
  },
  components: {
   // HelloWorld,
  //  Hello,
    InfoEquipo,
  },
  
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
