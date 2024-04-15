<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="用户名">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="密码">
      <a-input v-model:value="form.password" type="password"/>
    </a-form-item>
    <a-form-item label="这是上传文件">
      <a-input type="file"></a-input>
    </a-form-item>
    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="onSubmit">
        提交
      </a-button>
    </a-form-item>
  </a-form>
</template>
<script>
export default {

  data() {
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      form: {
        name: '',
        password: '',
      },
    };
  },
  methods: {
    onSubmit() {
        const formData = new FormData();
        formData.append("name",this.form.name);
        formData.append("password",this.form.password);
        alert(document.querySelector('input[type=file]').files[0])
        formData.append("upload_file",document.querySelector('input[type=file]').files[0])
        this.$axios.post('/chapter11/fileUpload',formData).then(function (response) {
                    console.log(response);
                }).catch(function (error) {
                    console.log(error);
            });
    },
  },
};
</script>