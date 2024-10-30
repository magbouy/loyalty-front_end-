import {CanActivateFn, Router} from '@angular/router';

function processUserRole() {
  let tokenValue = localStorage.getItem('token')
  let user_payload = `${tokenValue}`.split('.')[1]
  let userdata = JSON.parse(atob(user_payload))
  return userdata['role']
}

export const authGuard: CanActivateFn = (route, state) => {
  let userRole = processUserRole();
  if (userRole == 'User') {
    return false;
  } else {
    return true;
  }
};

export const superGuard: CanActivateFn = (route, state) => {
  let userRole = processUserRole();
  if(userRole == 'SuperAdmin') {
    return true;
  } else {
    return false;
  }
}

export const adminGuard: CanActivateFn = (route, state) => {
  let userRole = processUserRole();
  if(userRole == 'Admin') {
    return true;
  } else {
    return false;
  }
}

