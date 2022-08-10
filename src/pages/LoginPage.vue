<template>
  <div class="main">
    <div class="container pl-5 pr-5 pt-3 pb-3 mt-3 mb-3">
      <h3 class="text-center text-info border-bottom pb-3">登&nbsp;&nbsp;录</h3>
      <form class="mt-5" method="post">
        <div class="form-group">
          <label for="exampleInputEmail1">用户名</label>
          <input v-model="form.username" type="text" class="form-control" id="exampleInputName">
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密码</label>
          <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group row mt-4">
          <div class="col-sm-12 text-center">
            <button type="button" class="btn btn-info text-white form-control" @click="login">立即登录</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import axios from "../utils/axios"
// 导入状态仓库
import {mainStore} from "../store/index.js";
// 使普通数据变响应式的函数
import {storeToRefs} from "pinia";
import {localSet} from "../utils/storageUtil";
import {ElMessage} from "element-plus";

export default {


  setup() {
    // 实例化仓库
    const store = mainStore();
    const {userInfo, token} = storeToRefs(store);

    const state = reactive({
      form: {
        username: "root_admin",
        password: "root_admin",
        codeKey: "",
        codeText: "",
      }
    })



    const login = () => {
      axios
          .post("/login", {
            username: state.form.username,
            password: state.form.password,
          })
          .then((res) => {
            ElMessage({
              message: '登录成功',
              type: 'success',
            })
            userInfo.value = res.info
            token.value = res.token
            localSet("token", res.token);
            localSet("userInfo", res.info);
            window.location.href = "/";
          });
    }


    return {
      ...toRefs(state),
      login
    };

  }
}
</script>

<style scoped>
.main .container {
  width: 720px;
}

</style>
