import { Component, OnInit } from "@angular/core";

@Component({
  selector: "skill-list",
  templateUrl: "./skill-list.component.html",
  styleUrls: ["./skill-list.component.scss"]
})
export class SkillListComponent implements OnInit {
  cards: any[] = [
    {
      imageUrl:
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/124575301/original/1228538d009ae7b5184dbf878764a4708915726a/make-small-java-and-delphi-programs-and-applications.png",
      title: "JAVA",
      details: [
        "CORE JAVA",
        "OOP CONCEPTS",
        "MULTITHREADING",
        "INPUT/OUTPUT",
        "WEB"
      ]
    },
    {
      imageUrl:
        "https://3.bp.blogspot.com/-sZpG0bMK5xQ/W_qZl9AuksI/AAAAAAAAE9U/2aimw3DF5pUZzeAOmN7xiLc59GTqRaNIQCEwYBhgL/s1600/spring-hibernate.jpg",
      title: "SPRING",
      details: [
        "SPRING BOOT",
        "SPRING REST",
        "SPRING SECURITY",
        "SPRING CORE",
        "HIBERNATE"
      ]
    },
    {
      imageUrl: "https://miro.medium.com/max/720/1*aYD002x4UBQ4iJCRbiKJrg.png",
      title: "ANGULAR",
      details: [
        "PIPES",
        "COMPONENTS",
        "SECURITY-AUTH",
        "OBSERVABLES",
        "CALLING API"
      ]
    },
    {
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
      title: "NODEJS",
      details: [
        "EXPRESS",
        "MONGO DB",
        "SECURITY",
        "SENDING EMAILS",
        "MIDDLEWARE"
      ]
    }
  ];

  constructor() {}

  ngOnInit() {}
}
