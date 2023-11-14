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
    <h2 class="title">MOVIES</h2>

        <div class="grid">
            <AppCard v-for="movie in store.movies" :key="movie.id" :item="movie" />

            <div v-if="!store.movies.length">
                <span class="text-result">Nessun film da mostrare</span>
            </div>
        </div>
      
        <h2>TV</h2>
        <div class="grid">
            <Card v-for="serie in store.series" :key="serie.id" :item="serie" />

            <div v-if="!store.series.length">
                <span class="text-result">Nessuna serie tv da mostrare</span>
            </div>
        </div>

   
</template>

<style lang="scss" scoped>
.grid {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 5px;
}

.title {
    padding: 20px;
    text-align: center;
    color: white;
}

.text-result {
    text-align: center;
    color: white;
    font-size: 20px;
}
</style>