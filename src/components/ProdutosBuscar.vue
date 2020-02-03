<template>
  <form action="">
    <input type="text" name="busca" v-model="busca" id="busca" />
    <input
      type="submit"
      id="lupa"
      value="buscar"
      @click.prevent="buscarProdutos"
    />
    {{ busca }}
  </form>
</template>

<script>
export default {
  data() {
    return {
      busca: ""
    };
  },
  methods: {
    buscarProdutos() {
      this.$router.push({ query: { q: this.busca } });
    }
  }
};
</script>

<style></style>
