import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { NgForm } from '@angular/forms';
import { Users } from '../users';
import { Router } from '@angular/router';

@Component({
  selector: 'app-templatelog-reg',
  templateUrl: './templatelog-reg.component.html',
  styleUrls: ['./templatelog-reg.component.css']
})
export class TemplatelogRegComponent implements OnInit {
  newUser : Users = new Users();
  thisUser: object =[];

  loginData: object ={
    email:'',
    password:'',
  }

  constructor(private httpService:HttpService, private router:Router) { }

  ngOnInit() {
    this.httpService.getUsers().subscribe(data =>{
    this.thisUser= data;
    },
    error =>{
      console.log(error);
    })

  }
  onSubmit(event:Event, form: NgForm){
    event.preventDefault();
    this.httpService.createUser(this.newUser).subscribe(userCreated =>{
      localStorage.setItem('user', userCreated.id);
      localStorage.setItem('name', userCreated.first_name);
      this.router.navigateByUrl('/login/welcome')
    },
    error => {
      console.log(error);
    })
    this.newUser = new Users();
    form.reset();
  }

  onLogin(event:Event, form: NgForm){
    event.preventDefault();
    this.httpService.loginUser(this.loginData)
  }
  
}
