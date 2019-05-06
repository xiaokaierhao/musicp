<template>
  <div class="nav navbar">
    <div class="navmain">
      <div class="logo" @click="backhome">logo</div>
      <router-link to="/music">听</router-link>
      <router-link to="/bbs">shuo</router-link>
    </div>
    <div class="navright">
      <div class="login">登录</div>
      <div class="logon">注册</div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'navbar',
  data(){
    return {}
    },
    methods: {
      backhome(){
        this.router.push("/");
      }

    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .nav{
    width: 100%;
    height: 5%;
    background: #eee;
    display: flex;
  }
  .nav .navmain,.nav .navright{
    display: flex;
  }
</style>
