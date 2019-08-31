import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./main/main.component";
import { HomeComponent } from "./home/home.component";
import { SkillListComponent } from "./skill-list/skill-list.component";
import { ProjectListComponent } from "./project-list/project-list.component";
import { CardComponent } from "./card/card.component";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HomeComponent,
    SkillListComponent,
    ProjectListComponent,
    CardComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
