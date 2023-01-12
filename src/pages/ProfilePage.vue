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
        <img :src="profile.user.headerUrl" class="align-self-start mr-4 rounded-circle" alt="用户头像"
             style="width:50px;">
        <div class="media-body">
          <h5 class="mt-0 text-warning">
            <span>{{ profile.user.username }}</span>
            <button v-if="userId != userInfo.id" @click="follow(profile.user.id)" type="button"
                    class="btn btn-info btn-sm float-right mr-5 follow-btn">
              {{ profile.hasFollowed ? '已关注' : '关注TA' }}
            </button>
          </h5>
          <div class="text-muted mt-3">
            <span>注册于 <i class="text-muted">{{ formatTimer(profile.user.createTime) }}</i></span>
          </div>
          <div class="text-muted mt-3 mb-5">
            <span>关注了 <router-link :to="{
      name: 'followee',
      query: {
        id: userInfo.id
      }
    }"><a class="text-primary" href="followee.html">{{ profile.followeeCount }}</a></router-link> 人</span>
            <span class="ml-4">关注者 <router-link :to="{
      name: 'follower',
      query: {
        id: userInfo.id
      }
    }"><a class="text-primary" href="follower.html">{{ profile.followerCount }}</a></router-link> 人</span>
            <span class="ml-4">获得了 <i class="text-danger">{{ profile.likeCount }}</i> 个赞</span>
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
import {formatTimer} from "@/utils/timeUtil";
import axios from "@/utils/axios";
import {useRoute} from 'vue-router'
import {onMounted, reactive, toRefs} from "vue";

export default {
  setup() {
    const route = useRoute()

    // 实例化仓库
    const store = mainStore();
    const {userInfo} = storeToRefs(store);

    const state = reactive({
      profile: {
        user: {}
      },
      userId: 1
    })

    onMounted(() => {
      state.userId = route.query.id
      console.log(state.userId)
      getProfileDetail()
    })


    const follow = (entityId) => {
      if (state.profile.hasFollowed) {
        axios
            .post("/user/unfollow", {"entityType": 3, "entityId": entityId})
            .then((res) => {
              getProfileDetail()
            });
      } else {
        axios
            .post("/user/follow", {"entityType": 3, "entityId": entityId})
            .then((res) => {
              getProfileDetail()
            });
      }
    }

    const getProfileDetail = () => {
      axios.get('/user/profile/' + state.userId).then((res) => {
        state.profile = res
        console.log(res)
      })
    }


    return {
      ...toRefs(state),
      userInfo,
      getProfileDetail,
      follow,
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
