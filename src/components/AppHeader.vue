<script>
import {store} from '../store';
export default {
   
    data() {
        return {
            store: store,
            
        }
    }
}
</script>

<template>
    <div class="header-container">
        <div class="header-menu">
            <p class="header-text">BOOTFLIX</p>
            <ul class="header-list">
                <li class="header-list_style"><a href="#">Home</a></li>
                <li class="header-list_style"><a href="#">Serie Tv</a></li>
                <li class="header-list_style"><a href="#">Film</a></li>
                <li class="header-list_style"><a href="#">Originali</a></li>
                <li class="header-list_style"><a href="#">Aggiunti di recente</a></li>
                <li class="header-list_style"><a href="#">La mia lista</a></li>
            </ul>    
        </div> 
    
        <div class="search">
            <input class="header-input" type="text" placeholder="Cerca" @keyup.enter="$emit('search')"
                v-model.trim="store.searchText"
            >
            <a class="header-list_style" href="#"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></a>
            <a class="header-list_style" href="#">BAMBINI</a>
            <a class="header-list_style" href="#"><font-awesome-icon :icon="['fas', 'bell']" /></a>
            <img height="25" src="/icon-netflix.png" alt="">
        </div>
    </div>
</template>

<style scoped>
.header-container {
    background-color: black;
    color: darkgrey;
    width: 100%;
    height: 80px;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-input {
    min-width: 200px;
    font-size: 16px;
    border: none;
    background-color: white;
} 
.header-menu {
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.header-list {
    display: flex;
    justify-content: left;
    align-items: left;
}
.header-list_style {
    font-size: 18px;
    padding: 5px;

}
.search {
    margin-right: 30px; 
}

.button-search {
border: none;
} 
.header-text { 
    margin-left: 30px;
    margin-right: 20px;
    height: 40px;
    font-size: 40px;
    color: red;
}
</style>


