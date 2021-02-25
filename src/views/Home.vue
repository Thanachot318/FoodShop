<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1></h1>
    <h1>จำนวนสินค้าทั้งหมด = {{ this.$store.state.totalLike }} ชิ้น</h1>
    <h1>ราคาทั้งหมด = {{ this.$store.state.totalLove }} บาท</h1>
    <b-button variant="primary" @click="makeToast()">ยืนยันรายการ</b-button>
    <b-button variant="danger" onClick="javascript:location.reload();"
      >ลบรายการสินค้าทั้งหมด</b-button
    >
    <HelloWorld
      msg="เลือกสินค้า"
      @callbackLike="likelike"
      @callbackLove="lovelove"
      @callbackLove1="lovelove1"
      @callbackLove2="lovelove2"
      @callbackLove3="lovelove3"
      @callbackLove4="lovelove4"
    />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
// import { mapGetters } from "vue"

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  computed:{
    totalLike(){
      return this.$store.state.totalLike;
    },
    totalLove(){
      return this.$store.state.totalLove;
    },
    // ...mapGetters([
    //   'likelike',
    // ])
  },
  // data() {
  //   return {
  //     totalLike: 0,
  //     totalLove: 0,
  //   };
  // },
  methods: {
    likelike() {
      this.$store.state.totalLike++;
    },
    lovelove() {
      this.$store.state.totalLove += 6;
    },
    lovelove1() {
      this.$store.state.totalLove += 8;
    },
    lovelove2() {
      this.$store.state.totalLove += 13;
    },
    lovelove3() {
      this.$store.state.totalLove += 15;
    },
    lovelove4() {
      this.$store.state.totalLove += 12;
    },
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`การยืนยันสินค้าสำเร็จ`, {
        title: "การแจ้งเตือน",
        autoHideDelay: 1500,
        appendToast: append,
      });
    },
  },
};
</script>

<style>
</style>
