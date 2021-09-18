<template>
  <div>
      <h1>Login</h1>
      Nombre: <input type="text" placeholder="Nombre de usuario" v-model="userName"/>
      Contraseña: <input type="password" placeholder="Contraseña" v-model="passWord"/>
     <input type="button" value="Log on" @click="logOn()"/>


  </div>
</template>

<script>
export default {

    data(){
        return{
            userName:'',
            passWord:'',

        }
    },
    methods:{
        logOn(){
            console.log(`Trying to log on using ${this.userName} ans ${this.passWord}`);
            if(this.userName==='chayanne' && this.passWord=='chayanne123' )
            this.$router.push({
                name: 'McDonalds',
                params: {logonSuccesful:true}
                });
        }
    }

}
</script>

<style>

</style>