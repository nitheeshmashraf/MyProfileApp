import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import  { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  LoggedInAs:string;
  private apiUrl='https://pixabay.com/api/?key=6361417-ad97c2d131a8c928dd6f4d85d&pretty=true&q=';
  data: any={};
  fakeArray=["this","that","Home","None","GOto"];
  searchTerm='';
  constructor( private user:UserService, private http:Http) { 
    console.log('Hello world');
    this.getData();
    this.getImages();
  }

  SearchWithItem(){
    console.log("search");
    this.getData();
    this.getImages();
    
  }
  
  getData(){
    console.log("data");
    
    return this.http.get(this.apiUrl+this.searchTerm)
    .map((res :Response)=>res.json())
  }
  
  getImages(){
    console.log("Images");
    
    this.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }

  ngOnInit() {
    this.user.currentMessage.subscribe(message => this.LoggedInAs = message)
  }

}
