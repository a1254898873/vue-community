<template>
  <header-component></header-component>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from "../components/HeaderComponent"
import FooterComponent from "../components/FooterComponent"
export default {
  components:{
    HeaderComponent,
    FooterComponent
  },
  setup(){
    console.log(111)
  }

}
</script>

<style scoped>

</style>
