new Vue({
  el: "#blogposts",
  data: {
    link: ["index.html", "events.html","team.html", "projects.html"]
  },
  methods: {
    openblog(num) {
      window.open(this.link[num]);
    }
  }
});
