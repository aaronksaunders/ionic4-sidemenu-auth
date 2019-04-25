import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab-home",
  templateUrl: "./tab-home.page.html",
  styleUrls: ["./tab-home.page.scss"]
})
export class TabHomePage implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {}

  gotoDetail() {
    this.router.navigateByUrl("/members/tabs/tabHome/homeDetail");
  }
}
