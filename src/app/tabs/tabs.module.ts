import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";

import { IonicModule } from "@ionic/angular";

import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "",
        redirectTo: "tabs/(tabHome:tabHome)",
        pathMatch: "full"
      },
      {
        path: "tabHome",
        children: [
          {
            path: "",
            loadChildren: "../tab-home/tab-home.module#TabHomePageModule"
          }
        ]
      },
      {
        path: "tabHome/homeDetail",
        loadChildren: "../home-detail/home-detail.module#HomeDetailPageModule"
      },
      {
        path: "tabSettings",
        children: [
          {
            path: "",
            loadChildren:
              "../tab-settings/tab-settings.module#TabSettingsPageModule"
          }
        ]
      }
    ]
  },
  {
    path: "",
    redirectTo: "tabs/tabHome",
    pathMatch: "full"
  },
  { path: "about", loadChildren: "../about/about.module#AboutPageModule" }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
  declarations: [TabsPage]
})
export class TabsPageModule {}
