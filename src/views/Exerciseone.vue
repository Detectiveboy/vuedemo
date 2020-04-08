<template>
  <div id="warp">
    <h1 v-text="title"></h1>
    <div class="box">
      <label for="szz" :class="szz? 'active':''">
        <input type="checkbox" name="szz" @change="changeHandle('szz')" />
        {{szzTitle}}
      </label>
      <label for="spz" :class="spz? 'active':''">
        <input type="checkbox" name="spz" @change="changeHandle('spz')" />
        {{spzTitle}}
      </label>
      <label for="cnz" :class="cnz? 'active':''">
        <input type="checkbox" name="cnz" @change="changeHandle('cnz')" />
        {{cnzTitle}}
      </label>
      <label for="txz" :class="txz? 'active':''">
        <input type="checkbox" name="txz" @change="changeHandle('txz')" />
        {{txzTitle}}
      </label>
    </div>
    <div class="context">
      <h2 v-if="spz">{{spzTitle}}</h2>
      <h2 v-if="szz">{{szzTitle}}</h2>
      <h2 v-if="cnz">{{cnzTitle}}</h2>
      <h2 v-if="txz">{{txzTitle}}</h2>
      <p>{{desc}}</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      title: "星座分析器",
      desc: "不错哦",
      spz: false,
      txz: false,
      cnz: false,
      szz: false,
      spzTitle: "水瓶座",
      txzTitle: "天蝎座",
      cnzTitle: "处女座",
      szzTitle: "狮子座"
    };
  },
  methods: {
    changeHandle(str) {
      const inpArr = document.getElementsByTagName("input");
      if (str === "spz") {
        this.spz = !this.spz;
        this.szz = false;
        this.txz = false;
        this.cnz = false;
        for (let i = 0; i < inpArr.length; i++) {
          if (i !== 1) {
            inpArr[i].checked = false;
          }
        }
      }
      if (str === "szz") {
        this.szz = !this.szz;
        this.spz = false;
        this.txz = false;
        this.cnz = false;
        for (let i = 0; i < inpArr.length; i++) {
          if (i !== 0) {
            inpArr[i].checked = false;
          }
        }
      }
      if (str === "txz") {
        this.txz = !this.txz;
        this.szz = false;
        this.cnz = false;
        this.spz = false;
        for (let i = 0; i < inpArr.length; i++) {
          if (i !== 3) {
            inpArr[i].checked = false;
          }
        }
      }
      if (str === "cnz") {
        this.cnz = !this.cnz;
        this.szz = false;
        this.spz = false;
        this.txz = false;
        for (let i = 0; i < inpArr.length; i++) {
          if (i !== 2) {
            inpArr[i].checked = false;
          }
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$clr: red;
$fw: bold;
.active {
  color: $clr;
  font-weight: $fw;
}
</style>