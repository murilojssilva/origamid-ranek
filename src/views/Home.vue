<template>
  <div class="home">
    <section>
      <h1>Compre ou venda</h1>
      <ProdutosBuscar />
      <ProdutosLista />
    </section>
  </div>
</template>

<script>
import ProdutosLista from "../components/ProdutosLista";
import ProdutosBuscar from "../components/ProdutosBuscar";
export default {
  name: "home",
  components: {
    ProdutosLista,
    ProdutosBuscar
  }
};
</script>
<style scoped>
h1 {
  font-size: 2rem;
  color: #87f;
  text-align: center;
  margin-top: 40px;
}
</style>
