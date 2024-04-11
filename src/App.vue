<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

  <!-- <div>
    <router-link to="/">
      <a-button type="default">首页</a-button>
    </router-link>
    <router-link to="/home">
      <a-button type="primary">home</a-button>
    </router-link>

    <router-view></router-view>
  </div> -->

  <div>
    <a-menu mode="horizontal">
      <a-menu-item key="mail"> <router-link to="/index">首页<MailOutlined /></router-link> </a-menu-item>
      <a-menu-item key="book"> <router-link to="/books">书籍 <AppstoreOutlined/> </router-link> </a-menu-item>
      <a-menu-item key="post_test"> <router-link to="/post_test">post提交</router-link> </a-menu-item>
      <a-menu-item key="post_file"> <router-link to="/post_file">单文件上传 <UploadOutlined /> </router-link> </a-menu-item>
      <a-menu-item key="post_files"> <router-link to="/post_files">多文件上传</router-link> </a-menu-item>
      
      <!-- <a-menu-item key="app" disabled> <appstore-outlined />不能点击 </a-menu-item> -->
      <a-sub-menu> 
        <template v-slot:title>
          <span class="submenu-title-wrapper"> 
            <setting-outlined />
            Navigation Three - Submenu
          </span>
        </template>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">
            Option 1
          </a-menu-item>
          <a-menu-item key="setting:2">
            Option 2
          </a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">
            Option 3
          </a-menu-item>
          <a-menu-item key="setting:4">
            Option 4
          </a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <router-link to="/home">
          home <MenuOutlined />
        </router-link>
      </a-menu-item>
    </a-menu>

    <router-view/>
  </div>
  

</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import ant from 'ant-design-vue'
// import { AppstoreOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { MailOutlined, SettingOutlined } from '@ant-design/icons-vue';
import { AppstoreOutlined, UploadOutlined, MenuOutlined  } from '@ant-design/icons-vue'

// import {
//   HomeOutlined,
//   SettingFilled,
//   SmileOutlined,
//   SyncOutlined,
//   LoadingOutlined,
// } from '@ant-design/icons-vue';

export default {
  name: 'App',
  components: {
    // AppstoreOutlined,
    SettingOutlined,
    MailOutlined,
    AppstoreOutlined,
    UploadOutlined,
    MenuOutlined,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
