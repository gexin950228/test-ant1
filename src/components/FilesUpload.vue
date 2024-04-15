<template>
  <a-form :model="form" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="用户名">
      <a-input v-model:value="form.name" />
    </a-form-item>
    <a-form-item label="密码">
      <a-input v-model:value="form.password" type="password"/>
    </a-form-item>
    <a-form-item label="这是上传文件1">
      <a-input type="file" class="files"></a-input>
    </a-form-item>
    <a-form-item label="这是上传文件2">
      <a-input type="file" class="files"></a-input>
    </a-form-item>
    <a-form-item label="这是上传文件3">
      <a-input type="file" class="files"></a-input>
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
      let formData = new FormData
      const files = document.getElementsByClassName('files')
      formData['name'] = this.form.name
      formData["password"] = this.form.password
      alert(files.length)
      for(let i=0;i<files.length;i++){
        formData.append("upload_files", files[i].files[0])
      }
      this.$axios.post('/chapter11/filesUpload', formData).then(function (response) {
                console.log(response);
            }).catch(function (error) {
                console.log(error);
        });
    },
  },
};
</script>