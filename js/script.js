Vue.config.devtools = true;

new Vue({
  el: "#root",
  data: {
    mailList: [],
  },
  methods: {},
  mounted() {
    const url = "https://flynn.boolean.careers/exercises/api/random/mail";

    for (let i = 0; i < 10; i++) {

      axios.get(url).then((ajaxResponse) => {

        this.mailList.push(ajaxResponse.data.response);
      });
    };

  },
})