<template>
<h1>Hello you are on Home Compponent</h1>
</template>

<script>
export default {
    name:'Home',
    mounted(){      //mounted is a life cycle method which runs everytime when the page is render
    // console.log('home',localStorage.getItem('logged-in-user-id'))
        if(localStorage.getItem('logged-in-user-id')=== null) this.$router.push({name:'Signup'})
        // !(localStorage.getItem('logged-in-user-id'))
        // ? this.$router.push({name:'Signup'}) : this.$router.push({name:'Login'})
        // const userNotLoggedIn = !(localStorage.getItem('userLogin'));
        // if(userNotLoggedIn) this.$router.push({name:'Login'})
    }
}
</script>
