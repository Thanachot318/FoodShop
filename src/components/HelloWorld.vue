<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <b-container class="bv-example-row">
      <b-row>
        <div>
          <b-card-group deck>
            <b-card
              title="บะหมี่กึ่งสำเร็จรูป ตรามาม่า รสต้มยำกุ้ง"
              img-src="http://f.ptcdn.info/785/022/000/1409137821-544787topi-o.jpg"
              img-alt="Image"
              img-top
            >
              <b-card-text> 1 ซอง ราคา 6 บาท </b-card-text>
              <div>
                <b-button variant="primary" @click="likeClick"
                  >ซื้อ<b-badge variant="light">{{
                    like
                  }}</b-badge></b-button
                >
                <!-- <b-button variant="warning" @click="loveClick"
                  >ยกเลิก<b-badge variant="light">{{ love }}</b-badge></b-button
                > -->
              </div>
            </b-card>

            <b-card
              title="บะหมี่กึ่งสำเร็จรูป ตรามาม่า รสต้มยำน้ำข้น"
              img-src="https://media.shopat24.com/pdmain/125329_01_Supermarkets.jpg"
              img-alt="Image"
              img-top
            >
              <b-card-text> 1 ซอง ราคา 6 บาท </b-card-text>
              <div>
                <b-button variant="primary" @click="loveClick"
                  >ซื้อ<b-badge variant="light">{{ kon }}</b-badge></b-button
                >
                <!-- <b-button variant="warning" @click="loveClick"
                  >ยกเลิก<b-badge variant="light">{{ love }}</b-badge></b-button
                > -->
              </div>
            </b-card>

            <b-card
              title="บะหมี่กึ่งสำเร็จรูป ตรามาม่า รสหมูสับ"
              img-src="https://th-test-11.slatic.net/shop/c569b7c19c13c590282803443a22271f.jpeg"
              img-alt="Image"
              img-top
            >
              <b-card-text> 1 ซอง ราคา 8 บาท </b-card-text>
              <div>
                <b-button variant="primary" @click="mooClick"
                  >ซื้อ<b-badge variant="light">{{ moo }}</b-badge></b-button
                >
              </div>
            </b-card>
          </b-card-group>
        </div>
      </b-row>
      <b-row>
        <div>
          <b-card-group deck>
            <b-card
              title="คนอร์ คัพโจ๊ก รสหมูสับ"
              img-src="https://media.allonline.7eleven.co.th/pdmain/125348_00_Knor.jpg"
              img-alt="Image"
              img-top
            >
              <b-card-text> 1 ซอง ราคา 13 บาท </b-card-text>
              <div>
                <b-button variant="primary" @click="jmooClick"
                  >ซื้อ<b-badge variant="light">{{ jmoo }}</b-badge></b-button
                >
              </div>
            </b-card>

            <b-card
              title="คนอร์ คัพโจ๊ก รสไข่ฟู-หมูสับ"
              img-src="https://fn.lnwfile.com/8g7mbp.png"
              img-alt="Image"
              img-top
            >
              <b-card-text> 1 ซอง ราคา 15 บาท </b-card-text>
              <div>
                <b-button variant="primary" @click="eggClick"
                  >ซื้อ<b-badge variant="light">{{ egg }}</b-badge></b-button
                >
              </div>
            </b-card>

            <b-card
              title="คนอร์ คัพโจ๊ก รสไก่"
              img-src="https://shop-api.readyplanet.com/v1/image/500x0/d898852ada084919b9ebc6b880303555"
              img-alt="Image"
              img-top
            >
              <b-card-text> 1 ซอง ราคา 12 บาท </b-card-text>
              <div>
                <b-button variant="primary" @click="kitClick"
                  >ซื้อ<b-badge variant="light">{{ kit }}</b-badge></b-button
                >
              </div>
            </b-card>
          </b-card-group>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  computed: {
    like() {
      return this.$store.state.like;
    },
    kon() {
      return this.$store.state.kon;
    },
    moo() {
      return this.$store.state.moo;
    },
    jmoo() {
      return this.$store.state.jmoo;
    },
    egg() {
      return this.$store.state.egg;
    },
    kit() {
      return this.$store.state.kit;
    },
    // likeClick() {
    //  return this.$store.getters.likeClick;
    // },
    // loveClick() {
    //  return this.$store.mutation.loveClick;
    // },
    // mooClick() {
    //  return this.$store.mutation.mooClick;
    // },
    // jmooClick() {
    //  return this.$store.mutation.jmooClick;
    // },
    // eggClick() {
    //  return this.$store.mutation.eggClick;
    // },
    // kitClick() {
    //  return this.$store.mutation.kitClick;
    // },
  },
  // data() {
  //   return {
  //     like: 0,
  //     kon: 0,
  //     moo: 0,
  //     jmoo: 0,
  //     egg: 0,
  //     kit: 0,
  //     love: 0,
  //   };
  // },
  methods: {
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
