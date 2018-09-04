import { Component, OnInit, OnDestroy } from '@angular/core'

import {Router,ActivatedRoute} from '@angular/router'

//services
import {StaffService} from './../staff.service'
import{Subscription,Observable} from 'rxjs';
import {HttpGetService} from './../../../../Http-Services/http-get.service'
import {HttpDeleteService} from './../../../../Http-Services/http-delete.service'
//model
import {Staff} from './../../../../model/staff.class'

@Component({
  selector: 'app-staff-list',
  templateUrl: './staff-list.component.html',
  styleUrls: ['./staff-list.component.scss']
})
export class StaffListComponent implements OnInit ,OnDestroy{
  public staff : any;
  public isDisplay : boolean ;
  public subscription: Subscription;
  public listStaff: Staff[];
  private api: string="http://5b812a8497d8e500144f2ddc.mockapi.io/Staff";
  // public api: string="http://192.168.0.108:9999/test/getAll";
  constructor(
   public staffService: StaffService,
    public routerService: Router,
    public _httpGet: HttpGetService,
    public httpDelete: HttpDeleteService,
   ) { 
  
  }

  ngOnInit() {
    
   // this.getData;
    this.loadData();

  }

  loadData(){
    this.subscription= this._httpGet.getAll(this.api,this.listStaff).subscribe(data=>{
      
      this.staff=data.body;
    })
  }

  /*-----------Xoa du lieu -----------*/
onDeleteStaff(id: number){
  this.subscription = this.httpDelete.delete(id,this.api).subscribe((data : Staff) => {
    this.updateStaffAfterDelete(id)
  })
}

updateStaffAfterDelete(id: number){
  for(var i = 0; i < this.staff.length; i++){
    if(this.staff[i].id == id){
      this.staff.splice(i,1);
      this.updateStaffAfterDelete(id)
    }
  }
}

  ngOnDestroy(){
  if(this.subscription){
    this.subscription.unsubscribe();
  }
}
   
   
// getData(){
//   console.log('start ...');
//   this.subcription= this._httpGet.getAll(this.api).subscribe(data=>{
//     this.listStaff = data.body;
//     console.log('Phuong : ' + this.listStaff);
//   },error => {
//     console.log('error : ' + error);
//   })
// }

}