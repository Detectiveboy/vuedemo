<script>
export default {
  render(createElement) {
    return createElement("div", [
      createElement("h1", "render函数"),
      createElement(
        "p",
        {
          style: {
            height: "50px",
            background: "#ff3"
          },
          on: {
            click: this.clickHandle
          }
        },
        ["hello render"]
      )
    ]);
  },
  methods: {
    clickHandle() {
      console.log("我被点击了");
    }
  }
};
</script>