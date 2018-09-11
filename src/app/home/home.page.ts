import { Component } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"]
})
export class HomePage {
  constructor(private auth: AuthenticationService, private router: Router) {}
  logout() {
    this.auth.setLoggedIn(false);
    this.router.navigateByUrl("/");
  }
}
