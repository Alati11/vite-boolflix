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
        <div class="header-text">
            BOOTFLIX
        </div> 
        <div class="search">
            <input class="header-input" type="text" placeholder="Cerca" @keyup.enter="$emit('search')"
                v-model.trim="store.searchText"
            >
        </div>  
    </div>
    
</template>

<style scoped>


.header-container {
    background-color: black;
    color: red;
    width: 100%;
    height: 120px;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-input {
    min-width: 250px;
    font-size: 20px;
    border: none;
    background-color: white;
} 

.search {
    margin-right: 80px;
}

.button-search {
border: none;
} 

.header-text { 
    margin-left: 80px;
    height: 40px;
    font-size: 40px;
    background-color: black;

}



</style>


