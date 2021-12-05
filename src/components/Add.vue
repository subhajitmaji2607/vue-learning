<template>
<div class='box'>
    <h2>Hello you are on Add Compponent</h2>
    <form>
        <input
          v-model='retaurdant.name'
          class='input'
          type='text'
          placeholder='Enter Restaurant Name'
        />
        <input
          v-model='retaurdant.contract'
          class='input'
          type='text'
          placeholder='Enter Contract Number'
        />
        <button v-on:click='onClickAddRestro' class='btn'>Add Restaurant</button>
    </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'Add',
    data() {
        return {
            retaurdant:{
                name: '',
                contract: ''
            }
        }
    },
    methods: {
        onClickAddRestro(e) {
            e.preventDefault()
            // console.log(this.retaurdant)
            axios.post('http://localhost:3000/retaurdant',{
                name: this.retaurdant.name,
                contract:this.retaurdant.contract
            })
            this.retaurdant.name = ''
            this.retaurdant.contract = ''
        }
    }
}
</script>

<style>
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
