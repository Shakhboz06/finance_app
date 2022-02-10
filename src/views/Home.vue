<template>
  <div class="home">
    <Register/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/Header.vue";
import Register from './Register.vue';
import {mapActions} from 'vuex'
export default {
  name: "Home",
  components: {
    Header,
    Register,
  },
  methods:{
    ...mapActions(['CHECK_ME'])
  },
  created(){
    this.CHECK_ME()
  }
};
</script>

<style >
</style>