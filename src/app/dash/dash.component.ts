import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  constructor( private user:UserService) { }
  LoggedInAs:string;

  ngOnInit() {
    this.user.currentMessage.subscribe(message => this.LoggedInAs = message)
  }

}
