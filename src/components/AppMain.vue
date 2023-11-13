<script>
import {store} from '../store';
import CardMovie from './AppCardMovie.vue';

export default {
    components: {
        store: store,
        CardMovie,
    },
    data() {
        return {
            title: 'AppMain',
            message: 'Main'
        }
    }
}

</script>

<template>
    <div v-for="movie in store.movies" :key="movie.id">
    {{ movie.title }}
        
    </div>
</template>

<style>

</style>