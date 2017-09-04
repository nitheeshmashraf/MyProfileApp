import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  LoggedInAs:string ="Username";

  constructor( private user:UserService) { }

  ngOnInit() {
    this.user.currentMessage.subscribe(message => this.LoggedInAs = message)
  }

 

}
