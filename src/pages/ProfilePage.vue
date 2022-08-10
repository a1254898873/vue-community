<template>
  <div class="main">
    <div class="container">
      <!-- 选项 -->
      <div class="position-relative">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active" href="profile.html">个人信息</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="my-post.html">我的帖子</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="my-reply.html">我的回复</a>
          </li>
        </ul>
      </div>
      <!-- 个人信息 -->
      <div class="media mt-5">
        <img :src="userInfo.headerUrl" class="align-self-start mr-4 rounded-circle" alt="用户头像"
             style="width:50px;">
        <div class="media-body">
          <h5 class="mt-0 text-warning">
            <span>{{ userInfo.username }}</span>
            <button type="button" class="btn btn-info btn-sm float-right mr-5 follow-btn">关注TA</button>
          </h5>
          <div class="text-muted mt-3">
            <span>注册于 <i class="text-muted">{{ formatTimer(userInfo.createTime) }}</i></span>
          </div>
          <div class="text-muted mt-3 mb-5">
            <span>关注了 <a class="text-primary" href="followee.html">5</a> 人</span>
            <span class="ml-4">关注者 <a class="text-primary" href="follower.html">123</a> 人</span>
            <span class="ml-4">获得了 <i class="text-danger">87</i> 个赞</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


// 导入状态仓库
import {mainStore} from "../store/index.js";
// 使普通数据变响应式的函数
import {storeToRefs} from "pinia";
import { formatTimer } from "@/utils/timeUtil";

export default {
  setup(){

    // 实例化仓库
    const store = mainStore();
    const {userInfo} = storeToRefs(store);


    return {
      userInfo,
      formatTimer
    }

  }
}
</script>

<style scoped>
.main {
  min-height: 65vh;
}

</style>
