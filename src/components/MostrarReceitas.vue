<script lang="ts">
import { obterReceitas } from '@/http';
import type IReceita from '@/interfaces/IReceita';
import CardReceita from './CardReceita.vue';


export default {
    data() {
        return {
            receitas: [] as IReceita[]
        }
    }, 
    async created() {
        this.receitas = await obterReceitas();
    },
    components: {CardReceita}
}

</script>


<template>
    <section class="selecionar-receitas">
        <h1 class="cabecalho titulo-receitas">
            Receitas
        </h1>
        <p class="paragrafo-lg instrucoes">
            Veja as opções de receitas que encontramos com os ingredientes que você tem por ai!
        </p>
        <ul class="receitas">
            <li v-for="receita in receitas" :key="receita.nome">
                <CardReceita :receita="receita" />
            </li>
        </ul>
    </section>
</template>

<style scoped>

.selecionar-receitas {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo-receitas {
  color: var(--verde-medio, #3D6D4A);
  display: block;
  margin-bottom: 1.5rem;
}

.instrucoes {
  margin-bottom: 2rem;
}

.receitas {
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}


@media only screen and (max-width: 767px) {
  .dica {
    margin-bottom: 2.5rem;
  }
}

</style>