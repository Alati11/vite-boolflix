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
        }
    },
    computed: {
        srcFlag() {
            return this.store.flags[this.item.original_language]
        }
    },
    methods() {
        
    }
}
</script>

<template>
    <div class="card">
        <img :src="store.poster_path[id]" alt="">
        <ul>
            <li>{{ item.title }}</li>
            <li>{{ item.original_title }}</li>
            <li>
                <img height="10" v-if="store.flags[item.original_language]" 
                    :src="store.flags[item.original_language]"  alt="">

                <p v-else>{{ item.original_language }}</p>
            </li>
            <li>{{ item.vote_average }}</li>
            
                <font-awesome-icon icon="fa-solid fa-star"/>
           


            <!-- <li>{{ item.poster_path }}</li> -->
        </ul>
    </div>
</template>

<style lang="scss" scoped>
.card {
    padding: 20px;
    margin: 20px;
    color: white;
    border: 2px solid black;
    // background-image: url(/item.poster_path);

    }

</style>

