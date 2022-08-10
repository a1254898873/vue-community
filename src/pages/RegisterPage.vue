<template>
  <div class="main">
    <div class="container pl-5 pr-5 pt-3 pb-3 mt-3 mb-3">
      <h3 class="text-center text-info border-bottom pb-3">注&nbsp;&nbsp;册</h3>
      <form class="mt-5" method="post">
        <div class="form-group">
          <label for="exampleInputEmail1">用户名</label>
          <input v-model="form.username" type="text" class="form-control" id="exampleInputName">
        </div>
        <div class="form-group">
          <label for="exampleInputEmail1">邮箱地址</label>
          <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1"
                 aria-describedby="emailHelp">
          <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">密码</label>
          <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1">
        </div>
        <div class="form-group row mt-4">
          <div class="col-sm-12 text-center">
            <button type="button" class="btn btn-info text-white form-control" @click="register">立即注册</button>
          </div>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import {reactive, toRefs} from "vue";
import axios from "../utils/axios"

export default {
  setup() {

    const state = reactive({
      form: {
        username: "root_admin",
        email: "1254898873@qq.com",
        password: "root_admin",
        codeKey: "",
        codeText: "",
      }
    })


    const register = () => {
      axios
          .post("/register", {
            username: state.form.username,
            password: state.form.password,
            email:state.form.email
          })
          .then((res) => {
            console.log(res)
          });
    }

    return {
      ...toRefs(state),
      register
    };

  }
}
</script>

<style scoped>
.main .container {
  width: 720px;
}

</style>
