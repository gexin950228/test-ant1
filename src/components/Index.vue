<template>
    <div>
        <!-- <router-link to="http://127.0.0.1:8000/chapter11/apiAxios">测试axios</router-link> -->
        <a-button @click="TestAxios">测试axios</a-button> <br>
        <span>code:{{ code }}</span><br>
        <span>message:{{ msg }}</span>
    </div>
</template>

<script>

import ant from 'ant-design-vue'
// import axios from 'axios'


export default {
    name:"Index",
    data(){
        return {
            code: "",
            msg: "",
        }

    },
    components:{
        [ant.name]:ant
    },
    methods:{
        TestAxios(){
            // axios.get("http://127.0.0.1:8000/chapter11/apiAxios").then(function(data){
            // then(function(data)){
            //  匿名函数的this指针指向函数操作的本身，箭头函数this指针指向组件
            this.$ajax.get("/chapter11/apiAxios").then((res) =>{
                console.log(res.data)
                this.code = res.data.code
                this.msg = res.data.msg
                console.log(this.code, this.msg)
            }).catch((res) => {
                console.log(res)
            })
        }
    }
}
</script>

<style scoped>

</style>