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
    <div>
        <p>Titolo</p>
        <p>Titolo originale</p>
        <P>Lingua</P>
        <p>Voti</p>     
    </div>
</template>

<style>

</style>