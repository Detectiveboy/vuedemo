<template>
  <div id="continer">
    <div id="warp">
      <div>
        <label for="checkAll">
          <input type="checkbox" id="checkAll" v-model="checkStatu" @click="changeAll" />全选
        </label>
        <span>商品名称</span>
        <span>单价</span>
        <span>数量</span>
        <span>小计</span>
        <span>操作</span>
      </div>
      <div>
        <div v-for="(item,index) in list" :key="index">
          <input type="checkbox" v-model="checkArr" :value="item.id" />
          <span>{{item.name}}</span>
          <span>{{item.price}}</span>
          <span @click="add(item.id)">+</span>
          {{item.count}}
          <span @click="raduce(item.id)">-</span>
          <span>{{item.smallPrice}}</span>
          <button @click="deleteone(item.id)">删除</button>
        </div>
      </div>
      <div>
        <span @click="deleteAll">删除已选中的商品</span>
        <span>已选中{{count}}商品</span>
        <span>总价{{price}}</span>
        <button>去结算</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      checkStatu: false,
      checkArr: [],
      list: [
        {
          name: "西游记",
          price: 50,
          count: 1,
          smallPrice: 50,
          id: "No01"
        },
        {
          name: "三国演义",
          price: 60,
          count: 1,
          smallPrice: 60,
          id: "No02"
        },
        {
          name: "红楼梦",
          price: 50,
          count: 1,
          smallPrice: 50,
          id: "No03"
        }
      ]
    };
  },
  methods: {
    add(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (id === this.list[i].id) {
          this.list[i].count += 1;
          break;
        }
      }
    },
    raduce(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (id === this.list[i].id) {
          if (this.list[i].count >= 1) {
            this.list[i].count -= 1;
          }
          if (this.list[i].count === 0) {
            this.list.splice(i, 1);
          }
          break;
        }
      }
    },
    deleteone(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (id === this.list[i].id) {
          this.list.splice(i, 1);
          break;
        }
      }
      if (this.checkArr.length === this.list.length) {
        this.checkStatu = true;
      } else {
        this.checkStatu = false;
      }
    },
    deleteAll() {
      for (let i = 0; i < this.checkArr.length; i++) {
        for (let j = 0; j < this.list.length; j++) {
          if (this.checkArr[i] === this.list[j].id) {
            this.list.splice(j, 1);
          }
        }
      }
    },
    changeAll() {
      if (!this.checkStatu) {
        for (let i = 0; i < this.list.length; i++) {
          this.checkArr.push(this.list[i].id);
        }
      } else {
        this.checkArr = [];
      }
    }
  },
  watch: {
    checkArr(newVal) {
      if (newVal.length === this.list.length) {
        this.checkStatu = true;
      } else {
        this.checkStatu = false;
      }
    }
  },
  computed: {
    count() {
      return this.checkArr.length;
    },
    price() {
      let price = 0;
      for (let i = 0; i < this.checkArr.length; i++) {
        for (let j = 0; j < this.list.length; j++) {
          if (this.checkArr[i] === this.list[j].id) {
            price += this.list[j].price * this.list[j].count;
          }
        }
      }
      return price;
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin wh {
  width: 100%;
  height: 100%;
}
@mixin whlb {
  width: 100%;
  height: 50px;
  background: rgb(216, 206, 206);
  line-height: 50px;
}
@mixin btn {
  width: 100px;
  height: 100%;
  background: red;
  position: absolute;
  right: 0;
}
#continer {
  @include wh();
  #warp {
    @include wh();
    display: flex;
    flex-direction: column;
    div:nth-child(1) {
      @include whlb();
      label {
        margin-left: 50px;
      }
      label input {
        vertical-align: middle;
      }
      span {
        margin-left: 100px;
      }
    }
    div:nth-child(2) {
      flex: 1;
      overflow-y: auto;
      width: 100%;
      div {
        margin-top: 20px;
        width: 100%;
        height: 50px;
        line-height: 50px;
        background: rgb(217, 230, 229);
        position: relative;
        span:nth-child(2) {
          margin-left: 190px;
        }
        span:nth-child(3) {
          margin-left: 120px;
        }
        span:nth-child(4) {
          margin-left: 110px;
        }
        span:nth-child(5) {
          margin-left: 0;
        }
        span:nth-child(6) {
          margin-left: 100px;
        }
        button {
          @include btn();
        }
      }
    }
    div:nth-child(3) {
      @include whlb();
      position: relative;
      span {
        margin-left: 50px;
      }
      button {
        @include btn();
      }
    }
  }
}
</style>