<template>
  <div class="WalletPage">
    <Header />
    <div class="wrapper">
      <div class="heading">
        <h1>Мои кошельки</h1>
        <a href="mailto:alexadams@google.com">alexadams@google.com</a>
      </div>
      <div class="wallets">
        <div class="card">
          <div class="item">
            <h3>Visa</h3>
            <p>RUB</p>
          </div>
          <div class="item">
            <h3>Visa</h3>
            <p>RUB</p>
          </div>
          <div class="item">
            <h3>Visa</h3>
            <p>RUB</p>
          </div>
          <div class="item">
            <h3>Visa</h3>
            <p>RUB</p>
          </div>
        </div>
        <button>Добавить</button>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";
export default {
  name: "WalletPage",
  components: {
    Header,
  },
};
</script>

<style>
</style>