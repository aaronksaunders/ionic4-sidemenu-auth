import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"]
})
export class LoginPage implements OnInit {
  constructor(private router: Router, private auth: AuthenticationService) {}

  ngOnInit() {}

  login() {
    this.auth.setLoggedIn(true)
    this.router.navigateByUrl("members");
  }
}
