<template>
  <!-- 内容 -->
  <div class="main">
    <div class="container">
      <!-- 选项 -->
      <div class="position-relative">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <router-link :to="{
      name: 'profile'
    }">
              <a class="nav-link">个人信息</a></router-link>
          </li>
          <li class="nav-item">
            <router-link :to="{
      name: 'mypost'
    }"><a class="nav-link">我的帖子</a>
            </router-link>
          </li>
          <li class="nav-item">

            <router-link :to="{
      name: 'myreply'
    }"><a class="nav-link active">我的回复</a></router-link>
          </li>
        </ul>
        <a href="profile.html" class="text-muted position-absolute rt-0">返回个人主页&gt;</a>
      </div>
      <!-- 我的回复 -->
      <div class="mt-4">
        <h6><b class="square"></b> 回复的帖子(379)</h6>
        <ul class="list-unstyled mt-4 pl-3 pr-3">
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              顶顶顶!
            </div>
            <div class="text-right font-size-12 text-muted">
              回复于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
        </ul>
        <!-- 分页 -->
        <nav class="mt-5">
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
  </div>
</template>

<script>
export default {
  name: "MyReply"
}
</script>

<style scoped>

</style>
