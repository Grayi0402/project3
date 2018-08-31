import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-admin-component',
  templateUrl: './admin-component.component.html',
  styleUrls: ['./admin-component.component.scss']
})
export class AdminComponentComponent implements OnInit {
  imgLogoITsol ='./../../../assets/hinh/logo_2_itsol.png';
  imgFacebook='./../../../assets/hinh/iconfacebook_32x32.png';
  imgTwitter="./../../../assets/hinh/tiwtter_32x32.png";
  imgInsta="./../../../assets/hinh/instagram_32x32.png"; 
  constructor(
    private _routerService:Router
  ) { }

  ngOnInit() {
  }
  onLogout(){
   localStorage.clear();
    this._routerService.navigate(['login']);
  }

}
