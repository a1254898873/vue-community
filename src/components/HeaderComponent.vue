<template>
  <header class="bg-dark sticky-top">
    <div class="container">
      <!-- 导航 -->
      <nav class="navbar navbar-expand-lg navbar-dark">
        <!-- logo -->
        <a class="navbar-brand" href="#"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 功能 -->
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item ml-3 btn-group-vertical">
              <router-link class="nav-link" to="/">首页</router-link>
            </li>
            <li class="nav-item ml-3 btn-group-vertical" v-if="userInfo != null">
              <router-link class="nav-link" to="/letter">消息</router-link>
            </li>
            <li class="nav-item ml-3 btn-group-vertical" v-if="userInfo == null">
              <router-link class="nav-link" to="/register">注册</router-link>
            </li>
            <li class="nav-item ml-3 btn-group-vertical" v-if="userInfo == null">
              <router-link class="nav-link" to="/login">登录</router-link>
            </li>
            <li class="nav-item ml-3 btn-group-vertical dropdown" v-if="userInfo != null">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown"
                 aria-haspopup="true" aria-expanded="false">
                <img :src="userInfo.headerUrl" class="rounded-circle" style="width:40px;margin-right: 10px"/>
                <span style="margin-right: 10px">{{ userInfo.username }}</span>
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item text-center">
                  <router-link :to="{
      name: 'profile',
      query: {
        id: userInfo.id
      }
    }">个人主页
                  </router-link>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-center">
                  <router-link to="/setting">账号设置</router-link>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item text-center" @click="logout">退出登录</a>
              </div>
            </li>
          </ul>
          <!-- 搜索 -->
          <form class="form-inline my-2 my-lg-0" action="site/search.html">
            <input class="form-control mr-sm-2" type="search" aria-label="Search"/>
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit">搜索</button>
          </form>
        </div>
      </nav>
    </div>
  </header>

</template>

<script>
import {onMounted} from "vue";
// 导入状态仓库
import {mainStore} from "../store/index.js";
// 使普通数据变响应式的函数
import {storeToRefs} from "pinia";
import {localGet, localRemove} from "@/utils/storageUtil";
import axios from "@/utils/axios";
import {ElMessage} from "element-plus";


export default {
  setup() {
    // 实例化仓库
    const store = mainStore();
    const {userInfo, token} = storeToRefs(store);

    // const state = reactive({
    //   form: {
    //     username: "root_admin",
    //     password: "root_admin",
    //     codeKey: "",
    //     codeText: "",
    //   }
    // })


    onMounted(() => {
      if (userInfo.value == null) {
        userInfo.value = localGet("userInfo")
      }
    })

    const logout = () => {
      axios.get('/logout').then(() => {
        ElMessage({
          message: '退出成功',
          type: 'success',
        })
        userInfo.value = null,
            token.value = ""
        localRemove("token")
        localRemove("userInfo")
      })
    }


    return {
      // ...toRefs(state),
      userInfo,
      token,
      logout
    };
  }
}


</script>

<style>

</style>
