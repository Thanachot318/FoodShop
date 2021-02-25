<template>
  <div class="home">
    <h1>จำนวนสินค้าทั้งหมด = {{ this.$store.state.totalLike }}</h1>
    <b-button variant="danger" onClick="javascript:location.reload();"
      >ลบรายการสินค้าทั้งหมด</b-button
    >
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <Basket @callbackLove="lovelove" /> -->
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {},
  computed:{
    totalLike() {
      return this.$store.state.totalLike;
    },
    totalLove() {
      return this.$store.state.totalLove;
    },
  },
  // data() {
  //   return {
  //     totalLike:0,
  //     totalLove:0
  //   };
  // },
  methods:{
    likelike(){
      this.$store.state.totalLike++;
    },
    lovelove(){
      this.$store.state.totalLove++;
    }
  }
};
</script>