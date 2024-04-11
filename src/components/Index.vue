<template>
    <div>
        <!-- <router-link to="http://127.0.0.1:8000/chapter11/apiAxios">测试axios</router-link> -->
        <a-button @click="TestAxios">测试axios</a-button> <br>
        <span>code:{{ code }}</span><br>
        <span>message:{{ msg }}</span>
        <table>
            <td>
            <tr>用户Id: {{ user.id }}</tr><br>
            <tr>用户名: {{ user.name }}</tr> <br>
            <tr>住址: {{ user.address }}</tr> <br>
            <tr>照片: {{ user.pic }} </tr> <br>
            <tr>年龄: {{ user.age }}</tr>
        </td>
        </table>
        <span v-for="(array,i) in arrays" :key="array">
            {{ i }}: {{  array }} <br>
        </span>
        <span v-for="array in arrayStruct" :key="array">
            {{ array }} <br>
        </span>
        <span>{{ mapStruct?.user?.name }}</span>  <span>{{ mapStruct?.user?.address }}</span>
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
            user: "",
            arrays: [],
            arrayStruct: [],
            mapStruct: [],
        }

    },
    components:{
        [ant.name]:ant
    },
    created() {
        // this.TestAxios()
    },
    methods:{
        TestAxios(){
            // axios.get("http://127.0.0.1:8000/chapter11/apiAxios").then(function(data){
            // then(function(data)){
            //  匿名函数的this指针指向函数操作的本身，箭头函数this指针指向组件
            this.$axios.get("/chapter11/apiAxios").then((res) =>{
                console.log(res.data,"------")
                this.code = res.data.code
                this.msg = res.data.msg
                this.user = res.data.user
                this.arrays = res.data.arrays
                this.arrayStruct = res.data.arrayStruct
                this.mapStruct = res.data.mapStruct
                console.log(this.mapStruct)
                console.log(this.mapStruct)
            }).catch((res) => {
                console.log(res)
            })
        }
    }
}
</script>
<style scoped>
</style>