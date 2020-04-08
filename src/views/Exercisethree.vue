<template>
  <div id="continer">
    <div id="warp">
      <div id="blackboard">
        <div v-for="(item,index) in list" :key="index">
          {{`姓名：${item.singe?'匿名':item.name} 是否原创： ${item.sele?'原创':'非原创'}`}}
          <button
            @click="deleteone(item.id)"
          >删除</button>
          <p>{{item.msg}}</p>
        </div>
      </div>
      <div id="submit">
        <div>
          <label for="name">
            姓名：
            <input type="text" v-model.trim="name" id="name" />
          </label>
          <label for="singe">
            是否匿名发布：
            <input type="checkbox" v-model="singe" id="singe" />
          </label>
          <label for="select">
            是否为原创：
            <select v-model="sele" id="select">
              <option value="true">原创</option>
              <option value="false">非原创</option>
            </select>
          </label>
          <button @click="submit">发布</button>
        </div>
        <div>
          <textarea placeholder="请留言" v-model="msg"></textarea>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: "",
      singe: false,
      sele: true,
      msg: "",
      list: []
    };
  },
  methods: {
    submit() {
      if (this.name === "") {
        alert("姓名不得为空");
        return false;
      }
      if (this.msg === "") {
        alert("请留言");
        return false;
      }
      let obj = {
        name: this.name,
        singe: this.singe,
        sele: this.sele,
        msg: this.msg,
        id: new Date().getTime()
      };
      this.list.push(obj);
    },
    deleteone(id) {
      for (let i = 0; i < this.list.length; i++) {
        if (id === this.list[i].id) {
          this.list.splice(i, 1);
          break;
        }
      }
    }
  }
};
</script>
<style lang="scss" scoped>
@mixin wh {
  width: 100%;
  height: 100%;
}
#continer {
  @include wh();
  overflow: hidden;
  #warp {
    @include wh();
    display: flex;
    flex-direction: column;
    #blackboard {
      width: 100%;
      flex: 1;
      background: rgb(189, 184, 167);
      overflow-y: auto;
    }
    #submit {
      width: 100%;
      height: 200px;
      display: flex;
      flex-direction: column;
      div:nth-child(1) {
        width: 100%;
        height: 50px;
        line-height: 50px;
        position: relative;
        input,
        select,
        button {
          vertical-align: middle;
        }
        button {
          height: 100%;
          width: 100px;
          position: absolute;
          right: 0;
        }
      }
      div:nth-child(2) {
        width: 100%;
        flex: 1;
        line-height: 50px;
        textarea {
          @include wh;
          resize: none;
        }
      }
    }
  }
}
</style>