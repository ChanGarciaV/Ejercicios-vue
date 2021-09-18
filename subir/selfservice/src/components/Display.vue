<template>
  <div>
    <main id="app">
      <section class="items">
        <h4>Pick your items</h4>
        <div
          v-for="(product, n) in products"
          :key="n"
          class="product"
          @click="selectProduct(product)"
          :class="{ selected: product.active }"
        >
          <div class="photo">
            <img :src="product.photo" />
          </div>
          <div class="description">
            <span class="name">{{ product.name }}</span>
            <span class="price">${{ product.price }}</span>
            <div class="quantity-area">
              <template v-if="product.active">
                <button :disabled="product.quantity<=1" @click.stop="product.quantity--">- </button>
                <span class="quantity" >{{product.quantity}}</span>
                <button  @click.stop="product.quantity++">+</button> 
              </template>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    };
  },

  methods: {
    selectProduct: function(item) {
      item.active = !item.active;
      this.$emit('productoModificado',item); // emitimos un producto su estatus
    },
  },
  props:["products"],
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  margin: 0;
  font-family: "Open Sans", sans-serif;
}

main > section.items h4 {
  text-align: center;
  margin-top: 0;
  width: 100%;
}
main {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  padding-top: 20px;
}

main > section.items {
  display: flex;
  flex-wrap: wrap;
  border: 1px solid lightgrey;
  padding: 20px;
  max-width: 500px;
  min-width: 300px;
  justify-content: center;
}

section.items .product {
  border: 1px solid lightgrey;
  margin: 6px;
  flex: 0 0 calc(33.333% - 24px);
  cursor: pointer;
  text-align: center;
}

section.items .product.selected {
  border: 2px solid rgb(29, 134, 233);
}

section.items .photo img {
  max-width: 90px;
}

section.items .description {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: 11px;
  line-height: 15px;
}

section.items .description .price {
  font-weight: bold;
  margin: 4px auto;
}

section.items .description .quantity-area {
  margin: 8px auto;
  height: 14px;
}

section.items .description .quantity-area button {
  width: 16px;
  height: 16px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

section.items .description .quantity-area .quantity {
  font-weight: bold;
  margin: 0 4px;
}

section.summary {
  background-color: rgb(245, 245, 245);
  padding: 20px;
  min-height: 200px;
  min-width: 200px;
  text-align: center;
}

section.summary table {
  width: 100%;
  padding-top: 12px;
  font-size: 11px;
  margin: auto;
}

section.summary table tbody tr:last-of-type th {
  border-top: 1px solid black;
  padding-top: 4px;
}
</style>
