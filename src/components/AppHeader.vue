<script>
import {store} from '../store';
export default {
    components: {
        store: store,

    },
    data() {
        return {
            title: 'AppHeader',
            message: 'BOOLFLIX', 
            inputSearch: '',   
        }
    }
}

</script>

<template>
    <div class="header-container">
        <div class="header-text">
            {{ message }}
        </div> 
        <div class="search">
            <input class="header-input" type="text" placeholder=""
                v-model="inputSearch"
            >
            <button class="button-search">Cerca</button>
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
    height: 30px;
    min-width: 250px;
    font-size: 20px;

} 

.search {
    margin-right: 80px;
    border: none;
    height: 30px;
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


