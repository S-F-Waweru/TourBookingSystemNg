import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthServiceService } from '../Services/auth-service.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const auth = inject(AuthServiceService)
  console.log(auth.showStatus())
  if (auth.showStatus() === true){
    return true
    //allow them to access

  }else{
    router.navigate(['/login'])
      return false
  }
  return true;
};
