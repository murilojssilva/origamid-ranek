<template>
  <ul v-if="paginasTotal > 1">
    {{
      paginas
    }}
    <li v-for="pagina in paginasTotal" :key="pagina">
      <router-link :to="{ query: query(pagina) }">{{ pagina }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  methods: {
    query(pagina) {
      return {
        ...this.$route.query,
        _page: pagina
      };
    }
  },
  props: {
    produtosPorPagina: {
      type: Number,
      default: 1
    },
    produtosTotal: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paginasTotal() {
      const total = this.produtosTotal / this.produtosPorPagina;
      return total !== Infinity ? Math.ceil(total) : 0;
    },
    paginas() {
      const current = Number(this.$route.query._page);
      const range = 3;
      const total = this.paginasTotal;
      const offset = Math.ceil(range / 2);
      const pagesArray = [];

      for (let i = 1; i <= total; i++) {
        pagesArray.push(i);
      }

      pagesArray.splice(0, current - offset);
      pagesArray.splice(range, total);
      return pagesArray;
    }
  }
};
</script>

<style>
ul {
  grid-column: 1 / -1;
}
li {
  display: inline-block;
}
li a {
  padding: 2px 8px;
  border-radius: 2px;
  margin: 4px;
}

li a.router-link-exact-active,
li a.hover {
  background: #87f;
  color: #fff;
}
</style>
