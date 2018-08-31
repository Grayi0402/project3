import { Component, OnInit } from '@angular/core';

import { LogginService } from './../loggin.service'
import { Router } from '@angular/router'
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

  constructor(
   
    private _routerService:Router,
    private _logginService:LogginService
   
    
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

 

}
