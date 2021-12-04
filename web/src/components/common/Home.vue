<template>
  <div class="wrapper">
    <v-head></v-head>
    <div class="content-box">
      <div class="content">
        <transition name="move" mode="out-in">
          <keep-alive :include="tagsList">
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import vHead from './Header.vue';

export default {
  data() {
    return {
      tagsList: [],
      collapse: false
    };
  },
  components: {
    vHead,
  },
  created() {
  }
};
</script>

