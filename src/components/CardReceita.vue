<script lang="ts">
import type IReceita from '@/interfaces/IReceita';
import { isJSDocAllType } from 'typescript';
import type { PropType } from 'vue';


export default {
    props: {
        receita: {type: Object as PropType<IReceita>, required: true},

    },
    methods : {
        textTransform(string: String) {
            let text = this.receita.nome

            console.log()
            return  text.replace(' ', '_').toLowerCase
        }
    }
}

</script>

<template>
    <article class="receita">
        <img :src="`./public/imagens/receitas/${textTransform(receita.nome)}`" alt="" class="receita-imagem">
        <h2 class="paragrafo-lg receita__nome">{{ receita.nome }}</h2>
    </article>
</template>

<style scoped>

.receita {
  width: 19.5rem;
  padding: 1rem;
  border-radius: 1rem;
  background: var(--branco, #FFF);
  box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
  height: 100%;

  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
}

.receita__nome {
  text-align: center;
  color: var(--verde-medio, #3D6D4A);
  font-weight: 700;
}


</style>