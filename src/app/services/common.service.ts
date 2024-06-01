import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private router: Router) { }
  currentApp : string = 'qrpay';

  navigate(url:string){
    console.log(url);
  }

  switchApp(namespace:string,url:string){
    this.router.navigate([url]);
  }


  setCurrentAPP(app:string){
    this.currentApp = app;
  }

  getCurrentAPP(){
    return this.currentApp;
  }

}
