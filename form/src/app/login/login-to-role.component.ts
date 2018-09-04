import { Component, OnInit } from '@angular/core';

import { LogginService } from './../loggin.service'
import { Router } from '@angular/router'

import {Http, Headers, RequestOptions} from '@angular/http'
import {Subscription} from 'rxjs'

import {HttpPostService} from './../Http-Services/http-post.service'
@Component({
  selector: 'app-login-to-role',
  templateUrl: './login-to-role.component.html',
  styleUrls: ['./login-to-role.component.scss']
})
export class LoginToRoleComponent implements OnInit {
  private username:string;
  private password:string;
  private role:string;
  private isChecked:boolean=false;
  private colorCheck:string;
  private msg:string;

  subscription : Subscription; 
  api : string = "http://192.168.0.103:9999/login"
  constructor(
   
    private _routerService:Router,
    private _logginService:LogginService,
    private httpPost : HttpPostService,

   
    
  ) { }

  ngOnInit() {
    if(localStorage.getItem('admin')){
      this._routerService.navigate(['admin'])
    }
  }
   
  logginUser(event){
    event.preventDefault();
    const target = event.target;
    this.username = target.querySelector('#username').value;
    this.password = target.querySelector('#password').value;
    this.role = target.querySelector('#selected').value;

    if(this.username != '' && this.password !='')
    {
      this.msg='';
      let admin = {
      username:this.username,
      password:this.password,
      role:this.role
    }
    
    this.isChecked = this._logginService.checkLog(this.username,this.password,this.role);
    if(this.isChecked){

            console.log("login");

      this.login();

      this.colorCheck='green';
      localStorage.setItem('login-infor',JSON.stringify(admin));
      this._routerService.navigate(['admin']);
    }
    else{
      this.colorCheck='red';
    }
  }
  else{
    this.msg='Bạn chưa nhập tài khoản hoặc mật khẩu';
  }

  
    
  }


  login(){
    let formData: FormData = new FormData();
    formData.append("username",this.username);
    formData.append("password",this.password);

   this.subscription = this.httpPost.add(formData,this.api).subscribe(data => {
      // console.log(data.headers)
    })
  }

 

}
