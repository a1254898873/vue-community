<template>
  <div class="main">
    <div class="container">
      <div class="row">
        <div class="col-8">
          <h6><b class="square"></b> 来自 <i class="text-success">{{ targetInfo.username }}</i> 的私信</h6>
        </div>
        <div class="col-4 text-right">
          <button type="button" class="btn btn-secondary btn-sm" onclick="back();">返回</button>
          <button type="button" class="btn btn-primary btn-sm" data-toggle="modal" data-target="#sendModal">给TA私信
          </button>
        </div>
      </div>
      <!-- 弹出框 -->
      <div class="modal fade" id="sendModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">发私信</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
              <form>
                <div class="form-group">
                  <label for="recipient-name" class="col-form-label">发给：</label>
                  <input type="text" class="form-control" id="recipient-name" th:value="${target.username}">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">内容：</label>
                  <textarea class="form-control" id="message-text" rows="10"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" id="sendBtn">发送</button>
            </div>
          </div>
        </div>
      </div>
      <!-- 提示框 -->
      <div class="modal fade" id="hintModal" tabindex="-1" role="dialog" aria-labelledby="hintModalLabel"
           aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="hintModalLabel">提示</h5>
            </div>
            <div class="modal-body" id="hintBody">
              发送完毕!
            </div>
          </div>
        </div>
      </div>

      <!-- 私信列表 -->
      <ul class="list-unstyled mt-4">
        <li class="media pb-3 pt-3 mb-2" :key="index" v-for="(element,index) in letters">
          <a href="profile.html">
            <img :src="element.fromUser.headerUrl" class="mr-4 rounded-circle user-header" alt="用户头像">
          </a>
          <div class="toast show d-lg-block" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
              <strong class="mr-auto">{{ element.fromUser.username }}</strong>&nbsp;&nbsp;
              <small>{{
                  formatTimer(element.letter.createTime)
                }}</small>
              <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="toast-body" >
              {{ element.letter.content }}
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
import {useRoute} from 'vue-router'
import {onMounted, reactive, toRefs} from 'vue'
import { formatTimer } from "@/utils/timeUtil";
import axios from "../utils/axios"

export default {
  setup() {
    const route = useRoute()
    let letterId = "";
    const state = reactive({
      letters: [],
      targetInfo: {username: ""},
      page: {
        current: 1,
        limit: 10,
      }
    })

    onMounted(() => {
      letterId = route.query.id
      getLetterDetail()
    })

    const getLetterDetail = () => {
      axios.get('/message/letter/detail/' + letterId + '/?current=' + state.page.current + '&limit=' + state.page.limit).then((res) => {
        state.letters = res.letters
        state.targetInfo = res.target
      })
    }




    return {
      ...toRefs(state),
      getLetterDetail,
      formatTimer
    }

  }
}
</script>

<style scoped>
.main {
  min-height: 65vh;
}

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
