import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {

  private messageSource= new BehaviorSubject<string>("default Message");
  currentMessage= this.messageSource.asObservable();

  private isUserLoggedIn = false;
  
  constructor() {
    this.isUserLoggedIn=false;
   }

   setUserLoggedIn(){
     this.isUserLoggedIn=true;
   }

   getUserLoggedIn(){
     return this.isUserLoggedIn;
   }

   changeMessage(message:string){
     this.messageSource.next(message);
   }

}
