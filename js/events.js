Vue.component("event-component", {
  data: function() {
    return {
      events: [
        {
          id: 0,
          name: "event Name",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/event/game1.png"
        },
        {
          id: 1,
          name: "event Name2",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/event/software1.svg"
        },
        {
          id: 2,
          name: "event Name3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/event/web1.svg"
        },
        {
          id: 3,
          name: "event Name4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/event/VueLogo.png"
        },
        {
          id: 4,
          name: "event Name5",
          description:
            "Test Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
          image: "img/event/VueLogo.png"
        }
      ]
    };
  },
  template: `
    <div class="team row">
      <div class="col-lg-4 d-flex align-items-stretch" v-for="event in events" :key="event.id">
        <div class="card">
          <div class="profile-container">
            <img class="card-img-top" :src="event.image" alt="">
          </div>
          <div class="card-body">
            <h3 class="card-title">{{event.name}}</h3>
            <p class="card-text mb-2">{{event.description}}</p>
            <a href="#"><i class="fab fa-github"></i> </a>
          </div>
        </div>
      </div>
    </div>
  `
});

new Vue({
  el: "#app"
});
