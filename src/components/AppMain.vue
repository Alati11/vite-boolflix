<script>
import { store } from '../store';
import AppCard from './AppCard.vue';

export default {
    components: {
        AppCard,
    },
    data() {
        return {
            store: store,
        }
    }
}

</script>

<template>
    <h2 class="title">RISULTATI</h2>

    <div class="grid">
        <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />

        <!-- <div v-if="!store.movies.length">
            Nessun film da mostrare
        </div> -->
    </div>
</template>

<style lang="scss" scoped>

.grid {
  display: grid;
  grid-template-columns: repeat(4,1fr);
  gap: 10px;
}

.title { 
    padding: 20px;
    text-align: center; 
     
}

</style>