<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';


export default {
        props: {
            ingredientes: { type: Array as PropType<string[]>, required:true}
        },
        components: {Tag}
}

</script>

<template>
      <span class="subtitulo-lg sua-lista-texto">Sua Lista:</span>
            <ul v-if="ingredientes.length != 0" class="ingredientes-sua-lista">
                <li v-for="ingrediente in ingredientes" :key="ingrediente" class="ingrediente">
                    <Tag :texto="ingrediente" ativa/>
                </li>
            </ul>

            <p v-else class="paragrafo lista-vazia">
                <img src="../assets/images/icones/lista-vazia.svg" alt="Ícone de pesquisa">
                Sua lista istá vazia, seleciona ingredientes para iniciar
            </p>
</template>

<style scoped>.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}


.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;

}

</style>