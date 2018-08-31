import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrls: ['./user-component.component.scss']
})
export class UserComponentComponent implements OnInit {
  imgLogoITsol ='./../../../assets/hinh/logo_2_itsol.png';
  imgFacebook='./../../../assets/hinh/iconfacebook_32x32.png';
  imgTwitter="./../../../assets/hinh/tiwtter_32x32.png";
  imgInsta="./../../../assets/hinh/instagram_32x32.png"; 
  constructor(
    private _logginRouter:Router

  ) { }

  ngOnInit() {
  }
  logOutUser(){
    localStorage.clear();
    this._logginRouter.navigate(['login']);
  }

}
