<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <input type="button" value="Mensajes" @click="navega()" />
    <h3>{{$route.params.demo}} </h3>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Casita',
  methods:{
    navega:function(){
      this.$router.push("/messages"); // esta función hace que me rotee a la 

    }
  },
  components: {
    HelloWorld
  }
}
</script>
