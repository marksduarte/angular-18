import {CanMatchFn} from "@angular/router";

export const isAdminUserGuard = (): CanMatchFn => {
  return (route, segments) => {
    // Check if the user is an admin
    return true;
  }
}
