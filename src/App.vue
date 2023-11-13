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
          language: 'it-IT',
          poster_path:'',
        
        }
      }).then(res => {
        const movies = res.data.results
        this.store.movies = movies
        console.log(res.data.results)
      })

      axios.get('https://api.themoviedb.org/3/search/tv',{
        params: {
          api_key: this.store.API_KEY,
          query: this.store.searchText,
          language: 'it-IT',
          poster_path:'',

        }
      }).then(res => {
        const series= res.data.results
        this.store.series = series
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

<style lang="scss">
@use './style/general.scss'

</style>
