<template>
<h1>Hello {{ name }} you are on Home Compponent</h1>
<table border='1' class='table'>
    <tr>
        <td>Serial No</td>
        <td>Name</td>
        <td>Contract</td>
    </tr>
    <tr v-for='item in retaurdants' :key='item.id'>
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.contract}}</td>
    </tr>
</table>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Home',
    data() {
        return {
            name: '',
            retaurdants: [],
        }
    },
    async mounted() { //mounted is a life cycle method which runs everytime when the page is render
        // console.log('home',localStorage.getItem('logged-in-user-id'))
        const userSuccessfullySignup = localStorage.getItem('logged-in-user-id')
        const userSuccessfullyLogin = localStorage.getItem('userLogin')
        if(userSuccessfullySignup === null || userSuccessfullyLogin === null) this.$router.push({name:'Login'})
        // if (localStorage.getItem('logged-in-user-id') === null && !localStorage.getItem('userLogin')) this.$router.push({
        //     name: 'Signup'
        // })
        this.name = JSON.parse(localStorage.getItem('userInfo'))?.name
        console.log(userSuccessfullyLogin,userSuccessfullySignup)
        // ? this.$router.push({name:'Signup'}) : this.$router.push({name:'Login'})
        const result = await axios.get('http://localhost:3000/retaurdant')
        this.retaurdants = result.data
    }
}
</script>

<style>
td {
    width: 160px;
    height: 40px;
}
.table{
    margin-left: auto;
    margin-right: auto;
}
</style>
