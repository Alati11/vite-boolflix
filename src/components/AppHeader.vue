<script>
export default {
    data() {
        return {
            title: 'AppHeader',
            message: 'BOOLFLIX',
            
        }
    }
}

</script>

<template>
    <div class="header-container">
        <div class="header">
            {{ message }}
        </div> 
        <div>
            <input class="header-input" type="text" placeholder="Search">
        </div>  
    </div>
    
</template>

<style scoped>


.header-container {
    background-color: black;
    color: red;
    width: 100%;
    height: 80px;
    margin: 0px;
    padding: 0px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.header-input {

}



</style>


