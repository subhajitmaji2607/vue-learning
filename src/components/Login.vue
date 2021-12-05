<template>
<img class='logo' alt="Vue logo" src="../assets/logo.png">
<div class='box'>
    <h2>Login into the app</h2>
    <input
      v-model='email'
      class='input'
      type='text'
      placeholder='Enter Email'
    />
    <input
      v-model='password'
      class='input'
      type='text'
      placeholder='Enter Password'
    />
    <button v-on:click='onClickLogin' class='btn'>Login</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Login',
    data() { //data handel the data of the component
        return {
            email: '',
            password: '',
        }
    },
    methods: { //methods handle any type of function in that component
        async onClickLogin() {
            // console.log(this.email,this.password)
            const userLoginSuccessfully = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
            console.log(userLoginSuccessfully)
            this.email = ''
            this.password = ''
            if(userLoginSuccessfully.status === 200 && userLoginSuccessfully.data[0]){
                localStorage.setItem('userLogin', true)
                this.$router.push({name:'Home'})
            }else alert('Wrong user name or password')
        }
    },
    mounted(){  //mounted is a life cycle method which runs everytime when the page is render
    // console.log('login')
        const userAlreadyLoggedIn = localStorage.getItem('userLogin');
        if(userAlreadyLoggedIn) this.$router.push({name:'Home'})
    }

}
</script>

<style>
.logo {
    width: 100px
}

.box {
    /*border: 2px solid black;*/
    height: 400px;
    width: 700px;
    margin-left: auto;
    margin-right: auto
}

.input {
    display: block;
    margin-left: auto;
    margin-right: auto;
    height: 40px;
    width: 70%;
    margin-bottom: 15px;
    padding: 10px;
    border: 2px solid skyblue;
    font-size: 20px;
}

.btn {
    width: 74%;
    height: 50px;
    color: #edf4f7;
    background: chocolate;
    border: none;
    font-size: 25px;
    cursor: pointer;
}
</style>
