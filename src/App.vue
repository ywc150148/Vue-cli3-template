<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>-->

      <el-button type="success" icon="el-icon-arrow-left">
        <router-link to="/about">About</router-link>
      </el-button>
      <el-button type="primary">
        <router-link to="/">Home</router-link>
        <i class="el-icon-arrow-right el-icon--right"></i>
      </el-button>
    </div>

    <keep-alive>
      <router-view v-if="$route.meta.keep_alive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keep_alive"></router-view>
  </div>
</template>



<script>
import { Button } from "element-ui";

export default {
  name: "index",
  components: {
    [Button.name]: Button
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #ffffff;
    }
  }
}
</style>
