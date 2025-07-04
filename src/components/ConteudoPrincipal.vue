<script lang="ts">
import MostrarReceitas from "./MostrarReceitas.vue";
import SelecionarIngredientes from "./SelecionarIngredientes.vue";
import SuaLista from "./SuaLista.vue";
import Tag from "./Tag.vue";

type Pagina = "SelecionarIngredientes" | "MostrarReceitas";

export default {
  data() {
    return {
      ingredientes: [] as string[],
      conteudo: "SelecionarIngredientes" as Pagina,
      visivel: false,
    };
  },
  components: { SelecionarIngredientes, Tag, SuaLista, MostrarReceitas },
  methods: {
    adicionarIngrediente(ingrediente: string) {
      this.ingredientes.push(ingrediente);
      console.log(ingrediente);
    },
    removerIngrediente(ingrediente: string) {
      let indexToRemove = this.ingredientes.indexOf(ingrediente);
      this.ingredientes.splice(indexToRemove, 1);
      console.log(ingrediente);
    },
    navegar(pagina: Pagina) {
      this.conteudo = pagina;
    },
  },
};
</script>

<template>
  <main class="conteudo-principal">
    <SuaLista
      v-if="conteudo === 'SelecionarIngredientes'"
      :ingredientes="ingredientes"
    />

    <KeepAlive include="SelecionarIngredientes">
      <SelecionarIngredientes
        v-if="conteudo === 'SelecionarIngredientes'"
        @adicionar-ingrediente="adicionarIngrediente($event)"
        @remover-ingrediente="removerIngrediente($event)"
        @buscar-receitas="(conteudo = 'MostrarReceitas'), (visivel = true)"
      />

      <MostrarReceitas
        v-else-if="conteudo === 'MostrarReceitas'"
        @editar-receitas="navegar('SelecionarIngredientes')"
        :ingredientes="ingredientes"
      />
    </KeepAlive>
  </main>
</template>

<style scoped>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #fffaf3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>
