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
    }"><a class="nav-link active">我的帖子</a>
            </router-link>
          </li>
          <li class="nav-item">

            <router-link :to="{
      name: 'myreply'
    }"><a class="nav-link">我的回复</a></router-link>
          </li>
        </ul>
        <a href="profile.html" class="text-muted position-absolute rt-0">返回个人主页&gt;</a>
      </div>
      <!-- 我的帖子 -->
      <div class="mt-4">
        <h6><b class="square"></b> 发布的帖子(93)</h6>
        <ul class="list-unstyled mt-4 pl-3 pr-3">
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              金三银四的金三已经到了，你还沉浸在过年的喜悦中吗？
              如果是，那我要让你清醒一下了：目前大部分公司已经开启了内推，正式网申也将在3月份陆续开始，金三银四，春招的求职黄金时期已经来啦！！！
              再不准备，作为19应届生的你可能就找不到工作了。。。作为20届实习生的你可能就找不到实习了。。。
              现阶段时间紧，任务重，能做到短时间内快速提升的也就只有算法了，
              那么算法要怎么复习？重点在哪里？常见笔试面试算法题型和解题思路以及最优代码是怎样的？
              跟左程云老师学算法，不仅能解决以上所有问题，还能在短时间内得到最大程度的提升！！！
            </div>
            <div class="text-right font-size-12 text-muted">
              赞 <i class="mr-3">11</i> 发布于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              金三银四的金三已经到了，你还沉浸在过年的喜悦中吗？
              如果是，那我要让你清醒一下了：目前大部分公司已经开启了内推，正式网申也将在3月份陆续开始，金三银四，春招的求职黄金时期已经来啦！！！
              再不准备，作为19应届生的你可能就找不到工作了。。。作为20届实习生的你可能就找不到实习了。。。
              现阶段时间紧，任务重，能做到短时间内快速提升的也就只有算法了，
              那么算法要怎么复习？重点在哪里？常见笔试面试算法题型和解题思路以及最优代码是怎样的？
              跟左程云老师学算法，不仅能解决以上所有问题，还能在短时间内得到最大程度的提升！！！
            </div>
            <div class="text-right font-size-12 text-muted">
              赞 <i class="mr-3">11</i> 发布于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              金三银四的金三已经到了，你还沉浸在过年的喜悦中吗？
              如果是，那我要让你清醒一下了：目前大部分公司已经开启了内推，正式网申也将在3月份陆续开始，金三银四，春招的求职黄金时期已经来啦！！！
              再不准备，作为19应届生的你可能就找不到工作了。。。作为20届实习生的你可能就找不到实习了。。。
              现阶段时间紧，任务重，能做到短时间内快速提升的也就只有算法了，
              那么算法要怎么复习？重点在哪里？常见笔试面试算法题型和解题思路以及最优代码是怎样的？
              跟左程云老师学算法，不仅能解决以上所有问题，还能在短时间内得到最大程度的提升！！！
            </div>
            <div class="text-right font-size-12 text-muted">
              赞 <i class="mr-3">11</i> 发布于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              金三银四的金三已经到了，你还沉浸在过年的喜悦中吗？
              如果是，那我要让你清醒一下了：目前大部分公司已经开启了内推，正式网申也将在3月份陆续开始，金三银四，春招的求职黄金时期已经来啦！！！
              再不准备，作为19应届生的你可能就找不到工作了。。。作为20届实习生的你可能就找不到实习了。。。
              现阶段时间紧，任务重，能做到短时间内快速提升的也就只有算法了，
              那么算法要怎么复习？重点在哪里？常见笔试面试算法题型和解题思路以及最优代码是怎样的？
              跟左程云老师学算法，不仅能解决以上所有问题，还能在短时间内得到最大程度的提升！！！
            </div>
            <div class="text-right font-size-12 text-muted">
              赞 <i class="mr-3">11</i> 发布于 <b>2019-04-15 10:10:10</b>
            </div>
          </li>
          <li class="border-bottom pb-3 mt-4">
            <div class="font-size-16 text-info">
              <a href="#" class="text-info">备战春招，面试刷题跟他复习，一个月全搞定！</a>
            </div>
            <div class="mt-1 font-size-14">
              金三银四的金三已经到了，你还沉浸在过年的喜悦中吗？
              如果是，那我要让你清醒一下了：目前大部分公司已经开启了内推，正式网申也将在3月份陆续开始，金三银四，春招的求职黄金时期已经来啦！！！
              再不准备，作为19应届生的你可能就找不到工作了。。。作为20届实习生的你可能就找不到实习了。。。
              现阶段时间紧，任务重，能做到短时间内快速提升的也就只有算法了，
              那么算法要怎么复习？重点在哪里？常见笔试面试算法题型和解题思路以及最优代码是怎样的？
              跟左程云老师学算法，不仅能解决以上所有问题，还能在短时间内得到最大程度的提升！！！
            </div>
            <div class="text-right font-size-12 text-muted">
              赞 <i class="mr-3">11</i> 发布于 <b>2019-04-15 10:10:10</b>
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
  setup() {

  }
}
</script>

<style scoped>

</style>
