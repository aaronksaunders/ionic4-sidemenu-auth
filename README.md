# ionic4-sidemenu-auth
Building a Basic Ionic 4 Login Flow with Angular Router &amp; Side Menu UI
( now with Tabs !! )

### Updated to latest Ionic Versions
```
Ionic:

   Ionic CLI                     : 5.4.13 (/Users/aaronksaunders/.nvm/versions/node/v10.15.1/lib/node_modules/ionic)
   Ionic Framework               : @ionic/angular 4.11.7
   @angular-devkit/build-angular : 0.803.21
   @angular-devkit/schematics    : 8.1.3
   @angular/cli                  : 8.1.3
   @ionic/angular-toolkit        : 2.1.1

Utility:

   cordova-res                          : not installed
   native-run (update available: 0.3.0) : 0.2.9

System:

   NodeJS : v10.15.1 (/Users/aaronksaunders/.nvm/versions/node/v10.15.1/bin/node)
   npm    : 6.11.2
   OS     : macOS Catalina
```


- Code recently updated to latest version of Ionic `"@ionic/angular": "^4.3.0",`
- Made it a bit more complex with 
  - Authentication
  - Side Menu
  - Tabs
  - Tab Detail Page
- based on great work done here - https://devdactic.com/ionic-4-login-angular/


## How It Works

We put an `AuthGuard` on the module that provides access to all of the member related pages and functionality. The login page has no gaurd so it can be freely accessed. See more information on [Route Guards in the angular.io documentation](https://angular.io/guide/router#milestone-5-route-guards)

```javascript
const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'members', 
    canActivate: [AuthGuardService],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: 'login', loadChildren: './public/login/login.module#LoginPageModule' }
];
```

The member routing module is where we control access to the private content. An import note from the documentation is what supports this approach.

>The Routing Module is a design choice whose value is most obvious when the configuration is complex and includes specialized guard and resolver services. It can seem like overkill when the actual configuration is dead simple.
See more information on [Routing Modules in the Angular.io Documentation](https://angular.io/guide/router#milestone-2-routing-module)

We created the `authentication.service` to track in the user is logged in or out and to manage the two different states.

```javascript
// file: authentication.service.ts
export class AuthenticationService {
  isLoggedIn = false;

  constructor() {}

  setLoggedIn(_value) {
    this.isLoggedIn = _value;
  }
  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }
}
```

This service is injected into the `AuthGuard` to help control access to a specific route.

```javascript
  // file: authGuard.service.ts
  canActivate(): boolean {
    let value = this.auth.isAuthenticated() // <= from auth service
    if (!value) {
      this.router.navigateByUrl("/login")
    }
    return value
  }
}
```
and it is also used in the user interface, `app.component.html` to control the visibility of the side-menu. Meaning if you are not authenticated than the side menu isnt going to be showing.

```html
<!-- file: app.component.html -->
<ion-app>
  <ion-split-pane>
    <ion-menu *ngIf="auth.isAuthenticated() === true"> // CHECK TO SEE IF THIS SHOULD BE DISPLAYE
      <ion-header>
        <ion-toolbar>
          <ion-title>Menu</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-content>
      // MENU CONTENT
      </ion-content>
    </ion-menu>
    <ion-router-outlet main></ion-router-outlet>
  </ion-split-pane>
</ion-app>
```
