<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1></h1>
    <h1>จำนวนสินค้าทั้งหมด = {{ totalLike }} ชิ้น</h1>
    <h1>ราคาทั้งหมด = {{ totalLove }} บาท</h1>
    <!-- <b-alert
      :show="dismissCountDown"
      dismissible
      variant="success"
      @dismissed="dismissCountDown = 0"
      @dismiss-count-down="countDownChanged"
    >
      <p>ยืนยันสำเร็จ !!! {{ dismissCountDown }} seconds...</p>
      <b-progress
        variant="success"
        :max="dismissSecs"
        :value="dismissCountDown"
        height="4px"
      ></b-progress>
    </b-alert> -->
    <!-- <b-button @click="showAlert" variant="info" class="m-1">
      ยืนยันรายการ
    </b-button> -->
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

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      totalLike: 0,
      totalLove: 0,
      // dismissSecs: 3,
      // dismissCountDown: 0,
      // showDismissibleAlert: false,
    };
  },
  methods: {
    likelike() {
      this.totalLike++;
    },
    lovelove() {
      this.totalLove += 6;
    },
    lovelove1() {
      this.totalLove += 8;
    },
    lovelove2() {
      this.totalLove += 13;
    },
    lovelove3() {
      this.totalLove += 15;
    },
    lovelove4() {
      this.totalLove += 12;
    },
    makeToast(append = false) {
      this.toastCount++;
      this.$bvToast.toast(`การยืนยันสินค้าสำเร็จ`, {
        title: "การแจ้งเตือน",
        autoHideDelay: 1500,
        appendToast: append,
      });
    },
    // countDownChanged(dismissCountDown) {
    //   this.dismissCountDown = dismissCountDown;
    // },
    // showAlert() {
    //   this.dismissCountDown = this.dismissSecs;
    // },
  },
};
</script>

<style>

</style>
