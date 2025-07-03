<script lang="ts">
import Tag from './Tag.vue';

export default {
    components: {Tag},
    props: {
        ingrediente: {type: String, required: true }
    },
    data() {
        return {
            seleceionado: false
        }
    },
    methods: {
        onClick() {
            this.seleceionado = !this.seleceionado
            if(this.seleceionado == false) {
                this.$emit('removerIngrediente', this.ingrediente)
                console.log(this.seleceionado)
            } else {
                this.$emit('adicionarIngrediente', this.ingrediente);
                console.log(this.seleceionado)
            }
            
        }
    },

    emits : ['adicionarIngrediente', 'removerIngrediente']
}

</script>

<template>
    <button 
        class="ingrediente"
        @click="onClick()"
        :aria-pressed="seleceionado">
            <Tag :texto="ingrediente" :ativa="seleceionado"/>
    </button>
</template>

<style scoped>

.ingrediente {
    cursor: pointer;
}
</style>