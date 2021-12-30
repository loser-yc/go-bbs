<template>
  <div class="header">
    <div class="header-content">
      <div class="header-logo">
        <img src="/static/image/common/logo.png" alt="" style="height: 100%">
      </div>
      <nav class="header-nav-list">
        <a href="">首页</a>
        <a href="">论坛</a>
      </nav>
      <div class="header-search"></div>
      <div class="header-user">
        <a href="">登录</a>
        <a href="">注册</a>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {}
    }
  }
</script>

<style>
  .header {
    height: 50px;
    background-color: #FFFFFF;
    border-bottom: 1px solid #d3e0e9;
    box-shadow: 0 2px 2px 0 #dddddd;
  }
  .header-content {
    width: 68%;
    margin: 0 auto;
    line-height: 100%;
  }
  .header-content > div,nav {
    display: inline-block;
    vertical-align: top;
  }
  .header-nav-list {
    line-height: 50px;
  }
  .header-nav-list a {
    text-decoration: none;
    color: #555555;
  }
  .header-logo {
    height: 40px;
    margin-right: 30px;
  }
  .header-user {
    float: right;
    line-height: 50px;
  }
</style>
