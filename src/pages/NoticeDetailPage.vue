<template>
  <!-- 内容 -->
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <h6><b class="square"></b> 系统通知</h6>
        </div>
        <div class="col-4 text-right">
          <button type="button" class="btn btn-secondary btn-sm" onclick="back();">返回</button>
        </div>
      </div>

      <!-- 通知列表 -->
      <ul class="list-unstyled mt-4">
        <li class="media pb-3 pt-3 mb-2" :key="index" v-for="(element,index) in notices">
          <img :src="element.fromUser.headerUrl" class="mr-4 rounded-circle user-header" alt="系统图标">
          <div class="toast show d-lg-block" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong class="mr-auto">{{ element.fromUser.username }}</strong>
              <small>{{ formatTimer(element.notice.createTime) }}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body">
								<span v-if="topic == 'comment'">
									用户
									<i>{{ element.user.username }}</i>
									评论了你的<b>{{ element.entityType == 1 ? '帖子' : '回复' }}</b>,
									<router-link :to="{
      name: 'profile',
      query: {
        id: element.user.id
      }
    }"><a class="text-primary">点击查看</a></router-link> !
								</span>
              <span v-if="topic == 'like'">
									用户
									<i>{{ element.user.username }}</i>
									点赞了你的<b>{{ element.entityType == 1 ? '帖子' : '回复' }}</b>,
									<router-link :to="{
      name: 'profile',
      query: {
        id: element.user.id
      }
    }"><a class="text-primary">点击查看</a></router-link> !
								</span>
              <span v-if="topic == 'follow'">
									用户
									<i>{{ element.user.username }}</i>
									关注了你,
									<router-link :to="{
      name: 'profile',
      query: {
        id: element.user.id
      }
    }"><a class="text-primary">点击查看</a></router-link> !
								</span>
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
import {onMounted, reactive, toRefs} from "vue";
import axios from "@/utils/axios";
import {useRoute} from "vue-router";
import {formatTimer} from "@/utils/timeUtil";

export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      topic: '',
      notices: [],
      page: {
        current: 1,
        limit: 10,
      }
    })

    onMounted(() => {
      state.topic = route.query.topic
      getNoticeDetail(state.topic)
    })

    const getNoticeDetail = (topic) => {
      axios.get('message/notice/detail/' + topic + '?current=' + state.page.current + '&limit=' + state.page.limit).then((res) => {
        state.notices = res.notices
        console.log(state.notices)
      })
    }

    return {
      ...toRefs(state),
      formatTimer
    }
  }
}
</script>

<style scoped>

</style>
