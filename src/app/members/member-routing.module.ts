import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

const routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    loadChildren: "./home/home.module#HomePageModule"
  },
  {
    path: "list",
    loadChildren: "./list/list.module#ListPageModule"
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
  declarations: []
})
export class MemberRoutingModule {}
