import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    totalLike: 0,
    totalLove: 0,
    like: 0,
    kon: 0,
    moo: 0,
    jmoo: 0,
    egg: 0,
    kit: 0,
  },
  getters: {
    likelike: state => {
      return state.totalLike++
    },
    lovelove: state => {
      return state.totalLove++
    },
    like: state => {
      return state.like++
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
  mutations: {
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
  },
  actions: {
    likeClick() {
      this.like++,
        this.$emit("callbackLike", this.like),
        this.$emit("callbackLove", this.price1);
    },
    loveClick() {
      this.kon++,
        this.$emit("callbackLike", this.kon),
        this.$emit("callbackLove", this.price2);
    },
    mooClick() {
      this.moo++,
        this.$emit("callbackLike", this.moo),
        this.$emit("callbackLove1", this.price3);
    },
    jmooClick() {
      this.jmoo++,
        this.$emit("callbackLike", this.jmoo),
        this.$emit("callbackLove2", this.price4);
    },
    eggClick() {
      this.egg++,
        this.$emit("callbackLike", this.egg),
        this.$emit("callbackLove3", this.price5);
    },
    kitClick() {
      this.kit++,
        this.$emit("callbackLike", this.kit),
        this.$emit("callbackLove4", this.price6);
    },
  },
  modules: {},
});
