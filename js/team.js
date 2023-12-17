const members = [
  {
    id: 1,
    name: "Suryaveer Singh",
    description: "Scitech Secy",
    img: "img/team/matthew.png",
    // contact: "9999999999",
    year: "Fourth Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 2,
    name: "Kumar Abhinav",
    description: "Head, PClub\nSenior Member,EClub",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 3,
    name: "Kanishk Sharma",
    description: "Senior Member",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 4,
    name: "Rishikesh",
    description: "Senior Member",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 5,
    name: "Saptarshi Gosh",
    description: "Senior Member",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 6,
    name: "Saurabh",
    description: "Senior Member",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 7,
    name: "Suyash",
    description: "Senior Member",
    img: "img/team/matthew.png",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 8,
    name: "Jubin Nagpal",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 11,
    name: "Nemath",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 12,
    name: "Prayag Jain",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 13,
    name: "Saurabh Karkun",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 14,
    name: "Shavez Malick",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 15,
    name: "Vikram",
    description: "Member",
    img: "img/team/matthew.png",
    year: "Second Year",
    linkGit: "",
    linkLin: ""
  },

];

const heads = [
  {
    id: 1,
    name: "Sreevatsank",
    description: "Club Head",
    img: "img/team/matthew.png",
    // contact: "9999999999",
    year: "Third Year",
    linkGit: "",
    linkLin: ""
  },
  {
    id: 2,
    name: "Aniket Tiwary",
    description: "Ex-Club Head",
    img: "img/team/matthew.png",
    // contact: "9999999999",
    year: "Fourth Year",
    linkGit: "",
    linkLin: ""
  }
];

Vue.component("member-component", {
  template: `
	<div class="col-lg-3">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="member.img" alt="Card image cap">
			</div>
  			<div class="card-body">
    			<h5 class="card-title">{{member.name}}</h5>
				  <p class="card-text">{{member.description}}</p>
				  <p class="card-text mb-2">{{member.year}}</p>
          <a :href="member.linkGit"><i class="fab fa-github"></i> </a>
          <a :href="member.linkLin"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    member: Object
  }
});

Vue.component("head-component", {
  template: `
	<div class="col-lg-4">
		<div class="card">
			<div class="profile-container">
				<img class="card-img-top" :src="head.img" alt="Card image cap">
			</div>
  			<div class="card-body">
	    		<h5 class="card-title">{{head.name}}</h5>
				  <p class="card-text">{{head.description}}</p>
				  <p class="card-text mb-2">{{head.year}}</p>
          <a :href="head.linkGit"><i class="fab fa-github"></i> </a>
          <a :href="head.linkLin"><i class="fab fa-linkedin"></i> </a>
  			</div>
		</div>
	</div>
	`,
  props: {
    head: Object
  }
});

new Vue({
  el: "#app",
  data: {
    members,
    heads
  }
});
