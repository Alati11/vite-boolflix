<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import { store } from './store';
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppMain,  
  },
  data() {
    return {
      store: store,
    }
  },
  methods: {
    fecthMovies () {

      if(this.store.searchText === '') {
        store.movies = []
        store.series = []
        return
      }

      axios.get('https://api.themoviedb.org/3/search/movie',{
        params: {
          api_key: this.store.API_KEY,
          query: this.store.searchText,
          language: 'it-IT'
        }
      }).then(res => {
        const movies = res.data.results
        this.store.movies = movies
        console.log(res.data.results)
      })
    }
  }
}
</script>


<template>
  <AppHeader @search="fecthMovies" />
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
