const app = Vue.createApp({
  data() {
    return {
      value1: "test",
      value2: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hi");
    },
    setOutput(event) {
      this.value1 = event.target.value;
    },
    confirmName() {
      this.value2 = this.value1;
    },
  },
});

app.mount("#assignment");
