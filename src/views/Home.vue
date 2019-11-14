<template>
  <div class="home">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <!-- <img alt="Vue logo" :src="imgUrl"> -->

    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import { mapState, mapMutations } from "vuex";

export default {
  name: "home",
  computed: {
    ...mapState(["name"])
  },
  components: {
    HelloWorld,
  },
  mounted() {},
  data() {
    return {
      // imgUrl: require("../assets/logo.png")
    };
  },
  methods: {
    getData() {
      this.$axios
        .get(this.RESTFULAPI.public.blog, {
          params: {
            limit: 20,
            previousId: ""
          }
        })
        .then(response => {
          console.log("response", response);
        })
        .catch(error => {
          console.log("error", error);
        });
    }
  }
};
</script>
