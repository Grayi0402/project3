import { Injectable } from '@angular/core';

import {Staff} from './../../../model/staff.class'

import {ActivatedRoute,Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class StaffService {
	public listStaff : Staff[] = [
		// new Staff(1,'NV1','Nguyễn Ngọc Thạch',1,'07/01/1996','0981669705','thach@gmail.com','Đại học',1,'An Giang','Di AN Binh Duong',1231256457,'01/01/2001','An Giang',42413213,8234,'Thực tập sinh','02/07/2018','31/06/2018','03/09/2018','',null,null,null,null,null,null,null,null,null,null,),
		// new Staff(2,'NV2','Ngô Thị Mỹ Linh',0,'12/12/1998','01678293636','linh@gmail.com','Đại học',2,'','',null,'','',null,null,'','','','','',null,null,null,null,null,null,null,null,null,null)
	]
  constructor(
    public activateRoutes : ActivatedRoute,
    public routerService : Router,
    ) { 
  }

  getAllList(){
  	return this.listStaff;
    
  }

  getListByID(id: number){
    let result = null;
    for(var i =0; i < this.listStaff.length; i++){
      if(this.listStaff[i].id == id){
        result = this.listStaff[i]
        break;
      }
    }
    return result;
  }

  addStaff(staff: Staff){
    staff.id = this.getLastId(this.listStaff);
  	this.listStaff.push(staff);
  }
  getLastId(listStaff){
    let lastId = listStaff.length > 0 ? listStaff.sort((a,b) => {
      if(a.id > b.id) return -1;
      else if (a.id < b.id) return 1;
      else return 0; 
    })[0].id + 1 : 1;
    return lastId;
  }

  edit(staff: Staff){
    // let id = this.activateRoutes.snapshot.params['id']
    // for(var i = 0 ; i < this.listStaff.length; i++){
      // if(this.listStaff[i].id = id){
        this.listStaff.push({...staff})
      // }
    // }
         console.log(this.listStaff)
  }
}
