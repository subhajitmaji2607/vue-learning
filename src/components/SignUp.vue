<template>
    <img class='logo' alt="Vue logo" src="../assets/logo.png">
    <div class='box'>
        <h2>Sign Up For Free</h2>
        <input class='input' type='text' placeholder='Enter Name'/>
        <input class='input' type='text' placeholder='Enter email'/>
        <button class='btn'>Sign up</button>
    </div>
</template>

<script>

export default {
    name: 'Signup'
}
</script>

<style>
.logo{
    width: 100px
}
.box{
    /*border: 2px solid black;*/   
    height: 400px;
    width: 700px;
    margin-left: auto;
    margin-right: auto
}
.input{
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
.btn{
    width: 74%;
    height: 50px;
    color: #edf4f7;
    background: chocolate;
    border: none;
    font-size: 25px;
    cursor: pointer;
}
</style>