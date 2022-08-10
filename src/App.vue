<template>
  <div class="nk-container">
    <header-component></header-component>
    <router-view/>
    <footer-component></footer-component>
  </div>
</template>


<script>
import HeaderComponent from "./components/HeaderComponent"
import FooterComponent from "./components/FooterComponent"

export default {
  components: {
    HeaderComponent,
    FooterComponent
  },
  setup() {

  }
}
</script>

<style>
body {
  font-family: "Microsoft Yahei";
}
</style>
