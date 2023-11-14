<script>
import { store } from '../store';

export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store,
            basePath: 'https://image.tmdb.org/t/p/w342'
        }
    },
    computed: {
        srcFlag() {
            return this.store.flags[this.item.original_language]
        },
        vote() {
            return Math.round(this.item.vote_average / 2)
        }
    },

}

</script>

<template>
    <div class="card">
        <img v-if="item.poster_path" :src="basePath + item.poster_path" alt="">
        <img v-else src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">

        <ul>
            <li>{{ item.title }}</li>
            <li>{{ item.original_title }}</li>
            <li>
                <img height="10" v-if="store.flags[item.original_language]" :src="store.flags[item.original_language]"
                    alt="">

                <p v-else>{{ item.original_language }}</p>
            </li>
            <!-- <li>{{ item.vote_average }}</li> -->
            <li>{{ vote }}</li>
            <template v-for="n in 5" :key="n">
                <font-awesome-icon class="fas" v-if="n <= vote" :icon="['fas', 'star']" />
                <font-awesome-icon v-else :icon="['far', 'star']" />
            </template>
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 10px;
    margin: 5px;
    color: white;
    border: 1px solid darkgrey;
}
.fas {
    color: yellow;
}
</style>

