<template>
  <div class="header">
    <div class="links">
      <div class="left_side">
        <a>Главная</a>
        <a>Мои кошелки</a>
        <a>Мои транзакции</a>
      </div>
      <div class="right_side">
        <a href="mailto:alex.gmail.com">alexadams.gmail.com</a>
        <!-- <router-link to="/login"> -->
          <img src="../images/icons/log-out (1) 1.png" @click="LOG_OUT()"/>
        <!-- </router-link> -->
      </div>
    </div>
  </div>
</template>


<script>
import { mapActions } from 'vuex';
export default {
  name: "Header",
  methods:{
    LOG_OUT: function(){
      this.$router.push({ name: "Login" })
    }
  }
};
</script>

<style>
</style>