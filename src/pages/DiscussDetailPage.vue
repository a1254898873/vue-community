<template>
  <!-- 内容 -->
  <div class="main">
    <!-- 帖子详情 -->
    <div class="container">
      <!-- 标题 -->
      <h6 class="mb-4">
        <img src="http://static.nowcoder.com/images/img/icons/ico-discuss.png"/>
        <span>{{ postInfo.title }}</span>
        <div class="float-right">
          <button type="button" class="btn btn-danger btn-sm">置顶</button>
          <button type="button" class="btn btn-danger btn-sm">加精</button>
          <button type="button" class="btn btn-danger btn-sm">删除</button>
        </div>
      </h6>
      <!-- 作者 -->
      <div class="media pb-3 border-bottom">
        <a href="profile.html">
          <img :src="userInfo.headerUrl" class="align-self-start mr-4 rounded-circle user-header" alt="用户头像">
        </a>
        <div class="media-body">
          <div class="mt-0 text-warning">{{ userInfo.username }}</div>
          <div class="text-muted mt-3">
            发布于 <b>{{ formatTimer(postInfo.createTime) }}</b>
            <ul class="d-inline float-right">
              <li class="d-inline ml-2"><a href="#" class="text-primary">赞 11</a></li>
              <li class="d-inline ml-2">|</li>
              <li class="d-inline ml-2"><a href="#replyform" class="text-primary">回帖 <i
              >{{ postInfo.commentCount }}</i></a></li>
            </ul>
          </div>
        </div>
      </div>
      <!-- 正文 -->
      <div class="mt-4 mb-3 content">
        {{ postInfo.content }}
      </div>
    </div>
    <!-- 回帖 -->
    <div class="container mt-3">
      <!-- 回帖数量 -->
      <div class="row">
        <div class="col-8">
          <h6><b class="square"></b> <i>{{ postInfo.commentCount }}</i>条回帖</h6>
        </div>
      </div>
      <!-- 回帖列表 -->
      <ul class="list-unstyled mt-4">
        <li class="media pb-3 pt-3 mb-3 border-bottom" :key="index" v-for="(element,index) in comments">
          <a href="profile.html">
            <img :src="element.user.headerUrl" class="align-self-start mr-4 rounded-circle user-header" alt="用户头像">
          </a>
          <div class="media-body">
            <div class="mt-0">
              <span class="font-size-12 text-success">{{ element.user.username }}</span>
              <span class="badge badge-secondary float-right floor">
									<i th:text="${page.offset + cvoStat.count}">1</i>#
								</span>
            </div>
            <div class="mt-2">
              {{ element.comment.content }}
            </div>
            <div class="mt-4 text-muted font-size-12">
              <span>发布于 <b
              >{{
                  formatTimer(element.comment.createTime)
                }}</b></span>
              <ul class="d-inline float-right">
                <li class="d-inline ml-2"><a class="text-primary">赞(1)</a></li>
                <li class="d-inline ml-2">|</li>
                <li class="d-inline ml-2" @click="submitReply(element.comment.id)"><a class="text-primary">回复(<i>{{
                    element.replyCount
                  }}</i>)</a>
                </li>
              </ul>
            </div>
            <!-- 回复列表 -->
            <ul class="list-unstyled mt-4 bg-gray p-3 font-size-12 text-muted">

              <li class="pb-3 pt-3 mb-3 border-bottom" :key="i" v-for="(reply,i) in element.replys">
                <div>
										<span v-if="reply.target == null">
											<b class="text-info">{{ reply.user.username }}</b>:&nbsp;&nbsp;
										</span>
                  <span v-if="reply.target != null">
											<i class="text-info">{{ reply.user.username }}</i> 回复
											<b class="text-info">{{ reply.target.username }}</b>:&nbsp;&nbsp;
										</span>
                  <span>{{ reply.reply.content }}</span>
                </div>
                <div class="mt-3">
                  <span
                  >{{ formatTimer(reply.reply.createTime) }}</span>
                  <ul class="d-inline float-right">
                    <li class="d-inline ml-2"><a href="#" class="text-primary">赞(1)</a></li>
                    <li class="d-inline ml-2">|</li>
                    <li class="d-inline ml-2" @click="submitReplyToUser(element.comment.id,reply.reply.userId)"><a
                        class="text-primary">回复</a></li>
                  </ul>
                </div>
              </li>

              <!-- 回复输入框 -->
              <li class="pb-3 pt-3">
                <form method="post" th:action="@{|/comment/add/${post.id}|}">
                  <div>
                    <input type="text" class="input-size" name="content" placeholder="请输入你的观点"/>
                    <input type="hidden" name="entityType" value="2">
                    <input type="hidden" name="entityId" th:value="${cvo.comment.id}">
                  </div>
                  <div class="text-right mt-2">
                    <button type="submit" class="btn btn-primary btn-sm" onclick="#">&nbsp;&nbsp;回&nbsp;&nbsp;复&nbsp;&nbsp;</button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </li>
      </ul>
      <!-- 分页 -->
      <!--      <nav class="mt-5" th:replace="index::pagination">-->
      <!--        <ul class="pagination justify-content-center">-->
      <!--          <li class="page-item"><a class="page-link" href="#">首页</a></li>-->
      <!--          <li class="page-item disabled"><a class="page-link" href="#">上一页</a></li>-->
      <!--          <li class="page-item active"><a class="page-link" href="#">1</a></li>-->
      <!--          <li class="page-item"><a class="page-link" href="#">2</a></li>-->
      <!--          <li class="page-item"><a class="page-link" href="#">3</a></li>-->
      <!--          <li class="page-item"><a class="page-link" href="#">4</a></li>-->
      <!--          <li class="page-item"><a class="page-link" href="#">5</a></li>-->
      <!--          <li class="page-item"><a class="page-link" href="#">下一页</a></li>-->
      <!--          <li class="page-item"><a class="page-link" href="#">末页</a></li>-->
      <!--        </ul>-->
      <!--      </nav>-->
    </div>
    <!-- 回帖输入 -->
    <div class="container mt-3">
      <form class="replyform" method="post">
        <p class="mt-3">
          <a name="replyform"></a>
          <textarea v-model="comment.content" placeholder="在这里畅所欲言你的看法吧!" name="content"></textarea>
        </p>
        <p class="text-right">
          <button type="button" class="btn btn-primary btn-sm" @click="submitComment">&nbsp;&nbsp;回&nbsp;&nbsp;帖&nbsp;&nbsp;</button>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import {onMounted, reactive, toRefs} from 'vue'
import axios from "../utils/axios"
import { formatTimer } from "@/utils/timeUtil";
import {ElMessage, ElMessageBox} from "element-plus";

export default {

  setup() {
    const route = useRoute()
    let postId = 1;
    const state = reactive({
      postInfo: {title: "1"},
      userInfo: {headerUrl: "http://images.nowcoder.com/head/149t.png"},
      comments: [],
      page: {
        current: 1,
        limit: 10,
      },
      comment: {
        "content": "",
        "entityType": 1,
        "entityId": 281
      },
      reply: {}
    })

    onMounted(() => {
      postId = route.query.id
      console.log(postId)
      getPostDetail();
    })



    const getPostDetail = () => {
      axios.get('/discuss/detail/' + postId + '/?current=' + state.page.current + '&limit=' + state.page.limit).then((res) => {
        state.postInfo = res.post;
        state.userInfo = res.user;
        state.comments = res.comments;
        console.log(state.comments)
      })
    }

    const submitComment = () => {
      axios
          .post("/comment/add", {
            content: state.comment.content,
            entityType: 1,
            entityId: postId,
            targetId: 0
          })
          .then(() => {
            ElMessage({
              message: '成功提交评论',
              type: 'success',
            })
            state.comment.content = "";
            getPostDetail()
          });
    }

    const submitReply = (commentId) => {
      ElMessageBox.prompt('请输入回复内容', '回复', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      })
          .then(({value}) => {

            axios
                .post("/comment/add", {
                  content: value,
                  entityType: 2,
                  entityId: commentId,
                  targetId: 0
                })
                .then(() => {
                  ElMessage({
                    message: '成功提交评论',
                    type: 'success',
                  })
                  state.comment.content = "";
                  getPostDetail()
                });
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '取消评论',
            })
          })
    }


    const submitReplyToUser = (commentId, userId) => {
      ElMessageBox.prompt('请输入回复内容', '回复', {
        confirmButtonText: '确认',
        cancelButtonText: '取消'
      })
          .then(({value}) => {

            axios
                .post("/comment/add", {
                  content: value,
                  entityType: 2,
                  entityId: commentId,
                  targetId: userId
                })
                .then(() => {
                  ElMessage({
                    message: '成功提交评论',
                    type: 'success',
                  })
                  state.comment.content = "";
                  getPostDetail()
                });
          })
          .catch(() => {
            ElMessage({
              type: 'info',
              message: '取消评论',
            })
          })
    }

    //获取指定页数帖子
    const curPage = (index) => {
      state.page.current = index;
      getPostDetail();
    }

    //获取上一页
    const prePage = () => {
      if (state.page.current > 1) {
        state.page.current = state.page.current - 1;
        getPostDetail();
      }
    }
    const nextPage = () => {

      state.page.current = state.page.current + 1;
      getPostDetail();

    }

    return {
      ...toRefs(state),
      formatTimer,
      submitComment,
      submitReply,
      submitReplyToUser,
      curPage,
      prePage,
      nextPage

    }

  }

}
</script>

<style scoped>
.content {
  font-size: 16px;
  line-height: 2em;
}

.replyform textarea {
  width: 100%;
  height: 200px;
}

.floor {
  background: #dcdadc;
  padding: 4px 12px;
  border-radius: 3px;
  font-size: 14px;
}

.input-size {
  width: 100%;
  height: 35px;
}
</style>
