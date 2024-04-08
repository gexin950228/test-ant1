<template>
    <div>
        <!-- <router-link to="http://127.0.0.1:8000/chapter11/apiAxios">测试axios</router-link> -->
        <a-button @click="TestAxios">测试axios</a-button>
    </div>
</template>

<script>

import ant from 'ant-design-vue'
// import axios from 'axios'


export default {
    name:"Index",
    components:{
        [ant.name]:ant
    },
    methods:{
        TestAxios(){
            // axios.get("http://127.0.0.1:8000/chapter11/apiAxios").then(function(data){
            this.$ajax.get("/chapter11/apiAxios").then(function(response){
                console.log(response)
            }).catch(function(response) {
                console.log(response)
            })
        }
    }
}
</script>

<style scoped>

</style>