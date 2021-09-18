<template>
  <div >
    <h1>Mostrar info del equipo {{ Team }}</h1>
    <div v-if="this.Team.length>0">
        <p>Nombre del equipo: {{this.equipo}}</p>
        <p>Nombre corto del equipo: {{this.nombreCorto}}</p>
        <p>Año de formación: {{this.añoFormacion}}</p>
        <p>Deporte: {{this.deporte}}</p>
        <p>Liga: {{this.liga}}</p>

        <button @click="getTeamDetails()">{{
      loading ? 'Loading...' : 'Learn something profound'
    }}</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      result: true,
      nombre: "",
      loading: false,
      equipo: "",
      nombreCorto: "",
      añoFormacion: "",
      deporte: "",
      liga: "",
    };
  },
 // props: ["Team"],
  props: {
      Team: {
          type: String, // que sea de tipo stirng
          require: true, // para hacerlo obligatorio
          default: 'Los Angeles'
      }
  },

  methods: {
    async getTeamDetails() {
      this.loading = true;
      return axios.get(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.Team}`)
        .then((response) => {
          console.log(response.data.teams[0]);
          this.equipo=response.data.teams[0].strTeam;
          this.nombreCorto=response.data.teams[0].strTeamShort;
          this.añoFormacion=response.data.teams[0].intFormedYear;
          this.deporte=response.data.teams[0].strSport;
          this.liga=response.data.teams[0].strLeague;


          // this.axiosResponse = response.data
          // setTimeout(() => {
          //   this.loading = false
          // }, 4000);
        });
    },
  },
  watch:{
      Team: async function(newVal,oldVal){
          console.log('Prop changed', newVal,'| was: ', oldVal)
          await this.getTeamDetails();

      }
  }
};
</script>

<style></style>
