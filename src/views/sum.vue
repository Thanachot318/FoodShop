<template>
  <div class="home">
    <h1>จำนวนสินค้าทั้งหมด = {{ totalLike }}</h1>
    <b-button variant="danger" onClick="javascript:location.reload();">ลบรายการสินค้าทั้งหมด</b-button>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <Basket @callbackLove="lovelove"/>
  </div>
</template>

<script>

export default {
  name: "Home",
  components: {
    
  },
  data() {
    return {
      totalLike:0,
      totalLove:0
    };
  },
  methods:{
    likelike(){
      this.totalLike++;
    },
    lovelove(){
      this.totalLove++;
    }
  }
};
</script>