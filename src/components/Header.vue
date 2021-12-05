<template>
<div class='navbar'>
    <router-link to='/'>Home</router-link>
    <router-link to='/add'>Add Restaurant</router-link>
    <router-link to='/update'>update Restaurant</router-link>
    <router-link to='/login'>Login</router-link>
    <router-link to='/signup'>Signup</router-link>
    <router-link v-on:click= 'onClickLogout' to='#'>Log out</router-link>
</div>
</template>

<script>
export default {
    name: 'Header',
    methods:{
        onClickLogout(){
            localStorage.clear()
            this.$router.push({name:'Login'})
        }
    },

}
</script>

<style scoped>
.navbar {
    /*border: 2px solid black;*/
    min-height: 60px;
    margin-bottom: 20px;
    display: flex;
    background: white;
    justify-content: flex-end;
    align-items: center;
}

.navbar a {
    /*border: 2px solid black;*/
    text-decoration: none;
    width: 10%;
    font-size: 20px;
    color: black
}
</style>
