<script>
import store from '../store';
import AppCardMovie from './AppCardMovie.vue';

export default {
    components: {
        store,
        AppCardMovie,
    },
    data() {
        return {
            title: 'AppMain',
            message: 'Main',
            
        }
    }
}

</script>

<template>
    <div>
        <p>Titolo</p>
        <p>Titolo originale</p>
        <P>Lingua</P>
        <p>Voto</p>     
    </div>
</template>

<style>

</style>