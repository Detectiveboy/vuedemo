<script>
export default {
  name: "talk",
  render(createElement) {
    const _this = this;
    if (_this.getData().length) {
      return createElement(
        "ul",
        _this.getData().map(function(item) {
          return createElement("li", item);
        })
      );
    } else {
      return createElement("p", "聊天为空");
    }
  },
  methods: {
    getData() {
      return this.$store.state.list;
    }
  }
};
</script>