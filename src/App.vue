<script >

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue'
import store from './store';


export default {
  components: {
    AppHeader,
    AppMain,
    store,
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
