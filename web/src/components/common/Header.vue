<template>
  <div class="header">
    <div class="header-logo"></div>
    <nav class="header-nav-list">
      <a href="">首页</a>
      <a href="">论坛</a>
    </nav>
    <div class="header-search"></div>
    <div class="header-user"></div>
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
  .header-nav-list {
    line-height: 50px;
  }
  .header-nav-list a {
    text-decoration: none;
    color: #555555;
  }
</style>
