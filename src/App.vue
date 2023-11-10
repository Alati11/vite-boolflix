<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import {store} from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,
    store: store, 
  },
  data() {
    return {
      api_key: '68a3b6d5c53ee0854756fe7988888855',
      query: '',

    }

  },
  methods: {
    fecthMovies () {
      axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.key,
          query: this.query

        }
      }).then(res => {
        console.log(res.data.results)
      })

    }
  }
}
</script>


<template>
  <AppHeader />
  <AppMain />

</template>

<style>
* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    background-color: lightgrey;

}

</style>
