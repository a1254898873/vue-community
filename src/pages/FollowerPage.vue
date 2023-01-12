<template>
  <div class="main">
    <div class="container">
      <div class="position-relative">
        <!-- 选项 -->
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <router-link :to="{
      name: 'followee',
      query: {
        id: user.id
      }
    }">
              <a class="nav-link position-relative" >
                <i class="text-info">{{ user.username }}</i> 关注的人
              </a></router-link>
          </li>
          <li class="nav-item">
            <a class="nav-link position-relative active" >
              关注 <i class="text-info">{{ user.username }}</i> 的人
            </a>
          </li>
        </ul>
        <a th:href="@{|/user/profile/${user.id}|}" class="text-muted position-absolute rt-0">返回个人主页&gt;</a>
      </div>

      <!-- 粉丝列表 -->
      <ul class="list-unstyled">
        <li class="media pb-3 pt-3 mb-3 border-bottom position-relative" :key="index"
            v-for="(element,index) in followerList">
          <a th:href="@{|/user/profile/${map.user.id}|}">
            <img :src="element.user.headerUrl" class="mr-4 rounded-circle user-header" alt="用户头像">
          </a>
          <div class="media-body">
            <h6 class="mt-0 mb-3">
              <span class="text-success">{{ element.user.username }}</span>
              <span class="float-right text-muted font-size-12">
									关注于 <i>{{
                  formatTimer(element.followTime)
                }}</i>
								</span>
            </h6>
            <div>
              <input type="hidden" id="entityId" th:value="${map.user.id}">
              <button type="button"
                      th:class="|btn ${map.hasFollowed?'btn-secondary':'btn-info'} btn-sm float-right follow-btn|"
                      th:if="${loginUser!=null && loginUser.id!=map.user.id}" >
                {{ element.hasFollowed ? '已关注' : '关注TA' }}
              </button>
            </div>
          </div>
        </li>
      </ul>
      <!-- 分页 -->
      <nav class="mt-5" th:replace="index::pagination">
        <ul class="pagination justify-content-center">
          <li class="page-item"><a class="page-link" href="#">首页</a></li>
          <li class="page-item disabled"><a class="page-link" href="#">上一页</a></li>
          <li class="page-item active"><a class="page-link" href="#">1</a></li>
          <li class="page-item"><a class="page-link" href="#">2</a></li>
          <li class="page-item"><a class="page-link" href="#">3</a></li>
          <li class="page-item"><a class="page-link" href="#">4</a></li>
          <li class="page-item"><a class="page-link" href="#">5</a></li>
          <li class="page-item"><a class="page-link" href="#">下一页</a></li>
          <li class="page-item"><a class="page-link" href="#">末页</a></li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
import {useRoute} from "vue-router";
import {onMounted, reactive, toRefs} from "vue";
import axios from "@/utils/axios";
import {formatTimer} from "@/utils/timeUtil";

export default {
  setup() {
    const route = useRoute()

    const state = reactive({
      followerList: [],
      user: {},
      page: {
        current: 1,
        limit: 10,
      },
      userId: 1
    })

    onMounted(() => {
      state.userId = route.query.id
      console.log(state.userId)
      getFollowerList()
    })

    const getFollowerList = () => {
      axios.get('/user/followers/' + state.userId + '/?current=' + state.page.current + '&limit=' + state.page.limit).then((res) => {
        state.followerList = res.users
        state.user = res.user
        console.log(state.followerList)
      })
    }

    return {
      ...toRefs(state),
      formatTimer,
    }

  }
}
</script>

<style scoped>

</style>
