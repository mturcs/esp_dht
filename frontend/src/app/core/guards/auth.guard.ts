import { Injectable } from "@angular/core";
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router ) {}



  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("currentUser")) {
        // logged in so return true
        JSON.parse(localStorage.getItem("currentUser").valueOf())
        console.log("current User",localStorage.getItem("currentUser").valueOf())
        console.log("parse",JSON.parse(localStorage.getItem("currentUser").valueOf())["firstName"])
        return true;
      }
    }
    // not logged in so redirect to login page with the return url
    this.router.navigate(["/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
}
