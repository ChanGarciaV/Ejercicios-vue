<template>
  <div id="app">
    <div id="nav">
      <router-link :to="{name: 'Casita', params: {demo:'este es un parametro de entrada'}}" >Home</router-link> |
      <router-link :to="{name: 'About', params: {demo:'este es un parametro de entrada'}}">About</router-link>|
      <router-link to="/messages">MessageFeed</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

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
