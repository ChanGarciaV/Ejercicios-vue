<template>
  <section class="md:w-1/3 flex flex-col p-12">
  <!-- Profile Card -->
    <h3 class="font-bold font-lg">{{ formData.name }}</h3>
    <p class="mt-2">{{ formData.occupation }}</p>
  </section>
</template>

<script>
import eventBus from '../event-bus'; // Importamos al bus de eventos
// vamos a usar los lifecycle para enlazarnos subcribirnos al evento
export default {
  mounted(){
    eventBus.$on('profileUpdate', this.update); // oye EventBus ahi te encargo me avises cuando alguien 
    // se aviente un profileUpdate y cuanod avises se va a ejecutar ese update

  },
  methods:{
    update(formData){
      this.formData = formData;
    }
  },
  beforeDestroy(){
    eventBus.$off('profileUpdate', this.update);

  },
  data(){
    return{
      formData:{}
    }
  }
  // ya no se va a usar la propiedad porque el lo recibe
// ya no usamos una props porque la info ya no viene del padre
  // props: {
  //   formData: {
  //     type: Object,
  //     default() {
  //       return {}
  //     }
  //   }
  // }
}
</script>
