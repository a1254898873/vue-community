<template>
  <!-- 内容 -->
  <div class="main">
    <div class="container">
      <div class="position-relative">
        <!-- 选项 -->
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <router-link :to="{
      name: 'letter'
    }">
              <a class="nav-link position-relative">
                朋友私信<span class="badge badge-danger"
                          v-if="letterUnreadCount!=0">{{ letterUnreadCount }}</span>
              </a></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{
      name: 'notice'
    }">
              <a class="nav-link position-relative active">
                系统通知<span class="badge badge-danger"
                          v-if="noticeUnreadCount!=0">{{ noticeUnreadCount }}</span>
              </a></router-link>
          </li>
        </ul>
      </div>

      <!-- 通知列表 -->
      <ul class="list-unstyled">
        <!--评论类通知-->
        <li class="media pb-3 pt-3 mb-3 border-bottom position-relative" v-if="commentNotice!=null">
          <span class="badge badge-danger" th:text="${commentNotice.unread!=0?commentNotice.unread:''}">3</span>
          <img src="http://static.nowcoder.com/images/head/reply.png" class="mr-4 user-header" alt="通知图标">
          <div class="media-body">
            <h6 class="mt-0 mb-3">
              <span>评论</span>
              <span class="float-right text-muted font-size-12"
                    th:text="${#dates.format(commentNotice.message.createTime,'yyyy-MM-dd HH:mm:ss')}">2019-04-28 14:13:25</span>
            </h6>
            <div>
              <a th:href="@{/notice/detail/comment}">
                用户
                <i th:utext="${commentNotice.user.username}">nowcoder</i>
                评论了你的<b th:text="${commentNotice.entityType==1?'帖子':'回复'}">帖子</b> ...
              </a>
              <ul class="d-inline font-size-12 float-right">
                <li class="d-inline ml-2"><span class="text-primary">共 <i
                    th:text="${commentNotice.count}">3</i> 条会话</span></li>
              </ul>
            </div>
          </div>
        </li>
        <!--点赞类通知-->
        <li class="media pb-3 pt-3 mb-3 border-bottom position-relative" v-if="likeNotice!=null">
          <span class="badge badge-danger">{{ likeNotice.unread != 0 ? likeNotice.unread : '' }}</span>
          <img src="http://static.nowcoder.com/images/head/like.png" class="mr-4 user-header" alt="通知图标">
          <div class="media-body">
            <h6 class="mt-0 mb-3">
              <span>赞</span>
              <span class="float-right text-muted font-size-12"
                    th:text="${#dates.format(likeNotice.message.createTime,'yyyy-MM-dd HH:mm:ss')}">2019-04-28 14:13:25</span>
            </h6>
            <div>
              <a th:href="@{/notice/detail/like}">
                用户
                <i th:utext="${likeNotice.user.username}">nowcoder</i>
                点赞了你的<b th:text="${likeNotice.entityType==1?'帖子':'回复'}">帖子</b> ...
              </a>
              <ul class="d-inline font-size-12 float-right">
                <li class="d-inline ml-2"><span class="text-primary">共 <i th:text="${likeNotice.count}">3</i> 条会话</span>
                </li>
              </ul>
            </div>
          </div>
        </li>
        <!--关注类通知-->
        <li class="media pb-3 pt-3 mb-3 border-bottom position-relative" v-if="followNotice!=null">
          <span class="badge badge-danger">{{ followNotice.unread != 0 ? followNotice.unread : '' }}</span>
          <img src="http://static.nowcoder.com/images/head/follow.png" class="mr-4 user-header" alt="通知图标">
          <div class="media-body">
            <h6 class="mt-0 mb-3">
              <span>关注</span>
              <span class="float-right text-muted font-size-12"
              >{{ formatTimer(followNotice.message.createTime) }}</span>
            </h6>
            <div>
              <router-link :to="{
      name: 'noticeDetail',
            query: {
        topic: 'follow'
      }
    }">
                <a th:href="@{/notice/detail/follow}">
                  用户
                  <i>{{ followNotice.user.username }}</i>
                  关注了你 ...
                </a>
                <ul class="d-inline font-size-12 float-right">
                  <li class="d-inline ml-2"><span class="text-primary">共 <i
                  >{{ followNotice.count }}</i> 条会话</span></li>
                </ul>
              </router-link>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {onMounted, reactive, toRefs} from "vue";
import axios from "@/utils/axios";
import {formatTimer} from "@/utils/timeUtil";

export default {
  setup() {
    const state = reactive({
      letterUnreadCount: 0,
      noticeUnreadCount: 0,
      commentNotice: {},
      likeNotice: {},
      followNotice: {
        message: {},
        user: {}
      }
    })

    const getNoticeList = () => {
      axios.get('/message/notice/list').then((res) => {
        console.log(res)
        state.letterUnreadCount = res.letterUnreadCount
        state.noticeUnreadCount = res.noticeUnreadCount
        state.commentNotice = res.commentNotice
        state.likeNotice = res.likeNotice
        state.followNotice = res.followNotice
      })
    }

    onMounted(() => {
      getNoticeList()
    })

    return {
      ...toRefs(state),
      formatTimer
    }

  }
}
</script>

<style scoped>

</style>
