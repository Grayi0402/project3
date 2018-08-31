import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imgLogoITsol ='./../assets/hinh/logo_2_itsol.png';
  imgFacebook='./../assets/hinh/iconfacebook_32x32.png';
  imgTwitter="./../assets/hinh/tiwtter_32x32.png";
  imgInsta="./../assets/hinh/instagram_32x32.png"; 
  constructor() { }

  ngOnInit() {
  }

}
