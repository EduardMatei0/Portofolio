import { Component, OnInit } from "@angular/core";

@Component({
  selector: "project-list",
  templateUrl: "./project-list.component.html",
  styleUrls: ["./project-list.component.scss"]
})
export class ProjectListComponent implements OnInit {
  cards: any[] = [
    {
      imageUrl: "https://hotel-trillo.firebaseapp.com/img/hotel-1.jpg",
      title: "HOTELL TRILLO",
      description: "A Fictional hotel app using html and modern css",
      details: ["HTML", "CSS FLEXBOX", "MOBILE RESPONSIVE"],
      links: [
        "https://hotel-trillo.firebaseapp.com/",
        "https://github.com/EduardMatei0/Hotel-Project"
      ]
    },
    {
      imageUrl: "https://nexter-project.firebaseapp.com/img/story-2.jpeg",
      title: "NEXTER",
      description: "A Fictional realtor app using html and modern css",
      details: ["HTML", "CSS FLEXBOX", "MOBILE RESPONSIVE", "CSS GRID"],
      links: [
        "https://nexter-project.firebaseapp.com/",
        "https://github.com/EduardMatei0/Realtor-Project"
      ]
    },
    {
      imageUrl: "https://omnifood-food-app.firebaseapp.com/resources/img/2.jpg",
      title: "OMNIFOOD",
      description: "A Fictional food app using html and modern css",
      details: ["HTML", "CSS", "MOBILE RESPONSIVE"],
      links: [
        "https://omnifood-food-app.firebaseapp.com/",
        "https://github.com/EduardMatei0/Omnifood"
      ]
    },
    {
      imageUrl: "https://natours-project.firebaseapp.com/img/nat-1-large.jpg",
      title: "CHURCH PROJECT",
      description:
        "A fully functional website (with admin panel) for a local church.",
      details: ["ANGULAR", "FIREBASE", "MOBILE RESPONSIVE"],
      links: [
        "https://bbsb-project.firebaseapp.com/",
        "https://github.com/EduardMatei0/Site-Biserica"
      ]
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/7/7f/Lettuce_Mini_Heads_%287331119710%29.jpg",
      title: "ORGANIC SHOP - ECOMMERCE",
      description: "A Fictional ecommerce app using angular and firebase",
      details: ["ANGULAR", "FIREBASE", "ANGULAR SECURITY"],
      links: [
        "https://organic-shop-53781.firebaseapp.com/",
        "https://github.com/EduardMatei0/E-commerce"
      ]
    },
    {
      imageUrl: "https://natours.netlify.com/img/nat-2-large.jpg",
      title: "NATOURS API - NODEJS PROJECT",
      description: "A Fictional natous app using nodejs ",
      details: [
        "NODEJS",
        "MONGO DB",
        "PUG TEMPLATE",
        "FULL API BACK-END",
        "NODE SECURITY"
      ],
      links: [
        "https://natours-eduard.herokuapp.com",
        "https://github.com/EduardMatei0/Natours-Nodejs"
      ]
    },
    {
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      title: "CROWNS PROJECT",
      description: "A Fictional clothes ecommerce app using react and redux",
      details: ["REACT", "REDUX", "STRIPE API"],
      links: [
        "https://crown-clothing-ecommerce.herokuapp.com/",
        "https://github.com/EduardMatei0/React-Ecommerce-Clothing"
      ]
    },
    {
      imageUrl: "https://natours-project.firebaseapp.com/img/nat-1-large.jpg",
      title: "NATOURS PROJECT",
      description: "A Fictional natous app using html and modern css",
      details: ["HTML", "CSS ANIMATIONS", "MOBILE RESPONSIVE"],
      links: [
        "https://natours-project.firebaseapp.com/",
        "https://github.com/EduardMatei0/Nature-project"
      ]
    },
    {
      imageUrl:
        "https://images.media-allrecipes.com/userphotos/560x315/330365.jpg",
      title: "RECIPE ANGULAR PROJECT",
      description: "A Fictional recipes app using angular framework",
      details: ["ANGULAR", "FIREBASE AUTH", "MOBILE RESPONSIVE", "NG-REDUX"],
      links: [
        "https://recipeangularapp.firebaseapp.com/",
        "https://github.com/EduardMatei0/Angular-Recipe-Project"
      ]
    },
    {
      imageUrl:
        "https://blog.avira.com/wp-content/uploads/2018/04/chat-apps-750x354.jpg",
      title: "CHAT APP",
      description: "A Fictional chat app using nodejs",
      details: ["NODEJS", "SOCKET.IO", "JAVASCRIPT", "HEROKU"],
      links: [
        "https://eduard-chat-app.herokuapp.com",
        "https://github.com/EduardMatei0/Chat-App"
      ]
    }
  ];
  constructor() {}

  ngOnInit() {}
}
