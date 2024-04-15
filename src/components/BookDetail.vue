<template>
  <div>
    <h1>book detail page</h1>
    <table>
          <thead>
              <tr>
                <th>id</th>
                <th>书籍名称</th>
                <th>作者</th>
              </tr>
          </thead>
          <tbody>
            <tr>
              <th>{{ data.id }}</th>
              <th>{{ data.name }}</th>
              <th>{{ data.author }}</th>
            </tr>
          </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "BookDetail",
  data(){
    return{
      "data": [],
    }
  },
  mounted() {
    this.getBookDetail();
  },
  methods: {
    getBookDetail() {
      this.data.id = this.$route.params.id,
      this.$axios.get("/chapter11/book_detail", {
        params: {
          id: this.$route.params.id,
        }
      }).then((res) => {
        this.data = res.data.book
      }).catch((res) => {
        console.log(res)
      })
    },
  },
}
</script>

<style scoped>
table {
  margin-left: 40%;
}
th {
  border: 1px solid #000; /* 或者使用其他颜色 */
  padding: 10px; /* 根据需要调整内边距 */
}
 
/* 设置tbody的边框，这里使用了:first-child和:last-child伪类来确保边框只出现在行之间 */
tbody tr:first-child th,
tbody tr:last-child th {
  border-top: 1px solid #000; /* 或者使用其他颜色 */
  border-color: #000;
  border-width: 1px;
}
thead tr th {
  background-color: olivedrab;
  border-color: #000;
  border-width: 1px;
  width: auto;
  height: auto;
  border-bottom: 1px solid #000; /* 或者使用其他颜色 */
}
tbody tr th {
  background-color: antiquewhite;
  border-color: #000;
  border-width: 1px;
  width: auto;
  height: auto;
  border-bottom: 1px solid #000; /* 或者使用其他颜色 */
}
</style>