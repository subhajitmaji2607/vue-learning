<template>
<img class='logo' alt="Vue logo" src="../assets/logo.png">
<div class='box'>
    <h2>Sign Up For Free</h2>
    <input
      v-model='name'
      class='input'
      type='text'
      placeholder='Enter Name'
    />
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
    <button v-on:click='onClickSignup' class='btn'>Sign up</button>
</div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Signup',
    data() { //data handel the data of the component
        return {
            name: '',
            email: '',
            password: '',
        }
    },
    methods: { //methods handle any type of function in that component
        async onClickSignup() {
            const newUser = await axios.post('http://localhost:3000/users', {
                name: this.name,
                email: this.email,
                password: this.password,
            })
            console.log(newUser)
            this.name = ''
            this.email = ''
            this.password = ''
            localStorage.setItem('logged-in-user-id', newUser.data.id)
            if(newUser.status === 201){
                this.$router.push({name:'Login'})
            }
        }
    },
    mounted(){  //mounted is a life cycle method which runs everytime when the page is render
        // const userAlreadyLoggedIn = localStorage.getItem('userLogin');
        const userAlreadySignupRedirectToLoggedIn = localStorage.getItem('logged-in-user-id');
        if(userAlreadySignupRedirectToLoggedIn) this.$router.push({name:'Login'})
        // if(userAlreadyLoggedIn) this.$router.push({name:'Home'})
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
