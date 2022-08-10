<template>
  <!-- 内容 -->
  <div class="main">
    <div class="container">
      <div class="position-relative">
        <!-- 筛选条件 -->
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <a class="nav-link active" href="#">最新</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">最热</a>
          </li>
        </ul>
        <button type="button" class="btn btn-primary btn-sm position-absolute rt-0" data-toggle="modal"
                data-target="#publishModal" th:if="${loginUser!=null}">我要发布
        </button>
      </div>
      <!-- 弹出框 -->
      <div class="modal fade" id="publishModal" tabindex="-1" role="dialog" aria-labelledby="publishModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="publishModalLabel">新帖发布</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">标题：</label>
                  <input type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">正文：</label>
                  <textarea class="form-control" id="message-text" rows="15"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" id="publishBtn">发布</button>
            </div>
          </div>
        </div>
      </div>

      <!-- 帖子列表 -->
      <ul class="list-unstyled">
        <li class="media pb-3 pt-3 mb-3 border-bottom" :key="index" v-for="(element,index) in discussPosts">
          <a href="site/profile.html">
            <img :src="element.user.headerUrl" class="mr-4 rounded-circle" alt="用户头像" style="width:50px;height:50px;">
          </a>
          <div class="media-body">
            <h6 class="mt-0 mb-3">
              <router-link
                  :to="{
      name: 'discussDetail',
      query: {
        id: element.post.id
      }
    }">{{ element.post.title }}
              </router-link>
              <span class="badge badge-secondary bg-primary" v-if="element.post.type == 1">置顶</span>
              <span class="badge badge-secondary bg-danger" v-if="element.post.status == 1">精华</span>
            </h6>
            <div class="text-muted font-size-12">
              <u class="mr-3">{{ element.user.username }}</u> 发布于 <b
            >{{ formatTimer(element.post.createTime) }}</b>
              <ul class="d-inline float-right">
                <li class="d-inline ml-2">赞 11</li>
                <li class="d-inline ml-2">|</li>
                <li class="d-inline ml-2">回帖 <span>{{ element.post.commentCount }}</span></li>
              </ul>
            </div>
          </div>
        </li>
      </ul>

      <div class="row justify-content-md-center">
        <div class="col-md-auto">
          <nav aria-label="Page navigation example">
            <ul class="pagination">
              <li class="page-item"><a class="page-link" href="#" @click="prePage">上一页</a></li>
              <li class="page-item"><a class="page-link" href="#">{{ page.current }}</a></li>
              <li class="page-item"><a class="page-link" href="#" @click="nextPage">下一页</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import {onMounted, reactive, toRefs} from 'vue'
import axios from "../utils/axios"
import { formatTimer } from "@/utils/timeUtil";

export default {

  setup() {

    const state = reactive({
      discussPosts: null,
      page: {
        current: 1,
        limit: 10,
      },
      pageTotal: 0
    })

    onMounted(() => {
      getPostList()
    })




    //获取帖子
    const getPostList = () => {
      axios.get('/index?current=' + state.page.current + '&limit=' + state.page.limit).then((res) => {
        state.discussPosts = res.data
        state.pageTotal = res.pages
      })
    }

    //获取指定页数帖子
    const curPage = (index) => {
      state.page.current = index;
      getPostList();
    }

    //获取上一页
    const prePage = () => {
      if (state.page.current > 1) {
        state.page.current = state.page.current - 1;
        getPostList();
      }
    }
    const nextPage = () => {
      if (state.page.current < state.pageTotal) {
        state.page.current = state.page.current + 1;
        getPostList();
      }
    }


    return {
      ...toRefs(state),
      formatTimer,
      curPage,
      prePage,
      nextPage

    }
  }

}
</script>

<style scoped>

</style>
