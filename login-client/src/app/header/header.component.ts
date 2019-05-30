import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService} from '../http.service';
import { from } from 'rxjs';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  person = localStorage.getItem('user');
  namePerson = localStorage.getItem('name');

  constructor(private httpService:HttpService, private router: Router) { }

  ngOnInit() {
  }
 
  logout(){
    this.httpService.logoutUser()
 }
}
