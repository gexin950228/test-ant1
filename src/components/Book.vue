<template>
  <div>
    <a-button @click="getBooks">获取书籍</a-button>
    <!-- 这是book页面 -->
    <!-- {{ books }} -->
    <table class="my-table">
      <thead>
        <tr>
          <td>编号</td>
          <td>书籍名称</td>
          <td>作者</td> 
        </tr>
      </thead>
      <tbody  v-for="book in books" :key="book">
        <tr>
          <td>{{ book.id }}</td>
          <td>{{ book.name }}</td>
          <td>{{ book.author }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  name: "Book",
  data(){
    return {
      books: [],
    }
  },


  mounted() {
    // this.getBooks()
  },
  methods: {
    getBooks(){
      this.$axios.get("/chapter11/books").then((res) => {
        this.books = res.data.books;
        console.log(this.books);
      }).catch((res) => {
        console.log(res);
      })
    }
  }
}
</script>

<style scoped>
.my-table {
  border-collapse: collapse; /* 移除单元格间的距离 */
  border: 2px solid #000; /* 设置表格边框粗细和颜色 */
}
 
.my-table th,
.my-table td {
  border: 2px solid #000; /* 设置单元格边框粗细和颜色 */
  padding: 8px; /* 单元格内边距 */
  background-color: beige;
}
 
.my-table th:first-child,
.my-table td:first-child {
  border-left: 4px solid #333; /* 第一列加粗边框 */
}
 
.my-table tr:first-child th {
  border-top: 4px solid #333; /* 第一行加粗边框 */
}
</style>