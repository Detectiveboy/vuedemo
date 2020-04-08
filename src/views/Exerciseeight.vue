<script>
import talk from "@/components/Talk.vue";
export default {
  data() {
    return {
      text: ""
    };
  },
  components: {
    talk
  },
  render(createElement) {
    const _this = this;
    return createElement(
      "div",
      {
        class: {
          box: true
        }
      },
      [
        createElement(
          "div",
          {
            class: {
              talkBox: true
            }
          },
          [createElement("talk")]
        ),
        createElement("input", {
          on: {
            input(event) {
              _this.changHandle(event.target.value);
            },
            keyup(event) {
              if (event.keyCode === 13) {
                _this.keyUp();
              }
            }
          }
        })
      ]
    );
  },
  methods: {
    changHandle(val) {
      this.text = val;
    },
    keyUp() {
      if (this.text.length) {
        this.$store.state.list.push(this.text);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.box {
  width: 400px;
  height: 500px;
  border: 1px solid black;
  margin: auto;
  display: flex;
  flex-direction: column;
  .talkBox {
    flex: 1;
    width: 100%;
    overflow-y: auto;
  }
  input {
    width: 99%;
    height: 20px;
  }
}
</style>