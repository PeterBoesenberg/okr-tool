import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  {
    path: "introduction",
    loadChildren: "./introduction/introduction.module#IntroductionModule"
  },
  {
    path: "workshops",
    loadChildren: "./workshops/workshops.module#WorkshopsModule"
  },
  {
    path: "ressources",
    loadChildren: "./ressources/ressources.module#RessourcesModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
