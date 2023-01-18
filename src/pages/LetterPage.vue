<template>
  <div class="main">
    <div class="container">
      <div class="position-relative">
        <!-- 选项 -->
        <ul class="nav nav-tabs mb-3">
          <li class="nav-item">
            <router-link :to="{
      name: 'letter'
    }">
              <a class="nav-link position-relative active">
                朋友私信<span class="badge badge-danger"
                          v-if="letterUnreadCount != 0">{{ letterUnreadCount }}</span>
              </a></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{
      name: 'notice'
    }">
              <a class="nav-link position-relative" >系统通知<span
                  class="badge badge-danger">27</span></a></router-link>
          </li>
        </ul>
        <button type="button" class="btn btn-primary btn-sm position-absolute rt-0" data-toggle="modal"
                data-target="#sendModal">发私信
        </button>
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
                  <input v-model="letterform.toName" type="text" class="form-control" id="recipient-name">
                </div>
                <div class="form-group">
                  <label for="message-text" class="col-form-label">内容：</label>
                  <textarea v-model="letterform.content" class="form-control" id="message-text" rows="10"></textarea>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">取消</button>
              <button type="button" class="btn btn-primary" id="sendBtn" @click="submitLetter">发送</button>
            </div>
          </div>
        </div>
      </div>


      <!-- 私信列表 -->
      <ul class="list-unstyled">
        <li class="media pb-3 pt-3 mb-3 border-bottom position-relative" :key="index"
            v-for="(element,index) in conversations">
          <span class="badge badge-danger" v-if="element.unreadCount != 0">{{ element.unreadCount }}</span>
          <a href="profile.html">
            <img :src="element.target.headerUrl" class="mr-4 rounded-circle user-header" alt="用户头像">
          </a>
          <div class="media-body">
            <h6 class="mt-0 mb-3">
              <span class="text-success">{{ element.target.username }}</span>
              <span class="float-right text-muted font-size-12"
              >{{ formatTimer(element.conversation.createTime) }}</span>
            </h6>
            <div>
              <router-link
                  :to="{
      name: 'letterDetail',
      query: {
        id: element.conversation.conversationId
      }
    }">
                {{ element.conversation.content }}

                <ul class="d-inline font-size-12 float-right">
                  <li class="d-inline ml-2"><a href="#" class="text-primary">共<i>{{ element.letterCount }}</i>条会话</a>
                  </li>
                </ul>
              </router-link>
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
import {onMounted, reactive, toRefs} from 'vue'
import axios from "@/utils/axios";
import {formatTimer} from "@/utils/timeUtil";
import {ElMessage} from "element-plus";

export default {
  setup() {

    const state = reactive({
      conversations: null,
      letterUnreadCount: 0,
      page: {
        current: 1,
        limit: 10,
      },
      letterform: {
        toName: "",
        content: ""
      }
    })

    const getLetterList = () => {
      axios.get('/message/letter/list?current=' + state.page.current + '&limit=' + state.page.limit).then((res) => {
        state.conversations = res.conversations
        state.letterUnreadCount = res.letterUnreadCount
      })
    }

    const submitLetter = () => {
      axios
          .post("/message/letter/send", {
            toName: state.letterform.toName,
            content: state.letterform.content
          })
          .then(() => {
            ElMessage({
              message: '成功发送私信',
              type: 'success',
            })
            state.letterform.toName = "";
            state.letterform.content = "";
            getLetterList()
          });
    }


    onMounted(() => {
      getLetterList();
    })


    return {
      ...toRefs(state),
      formatTimer,
      submitLetter
    }

  }
}
</script>

<style scoped>
.main {
  min-height: 65vh;
}

.main .nav .badge {
  position: absolute;
  top: -3px;
  left: 68px;
}

.main .media .badge {
  position: absolute;
  top: 12px;
  left: -3px;
}

.toast {
  max-width: 100%;
  width: 80%;
}
</style>
