import { Component, OnInit } from '@angular/core';
import  { Notification }	from './../managed-notification/notification.class'
import { FormControl } from '@angular/forms'
import  { Validators } from '@angular/forms'
import { FormGroup} from '@angular/forms'
import { FormBuilder} from '@angular/forms'
import { FormArray} from '@angular/forms'
import {ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-managed-notification',
  templateUrl: './managed-notification.component.html',
  styleUrls: ['./managed-notification.component.scss']
})
export class ManagedNotificationComponent implements OnInit {

public typeNotification={_thTin:"Thông tin",_khCap:"Khẩn cấp",_deNghi:"Đề nghị",_khac:"Khác"};
	public quyMo={_toanCty:"Toàn công ty",_chiNhanh:"Chi nhánh",_nhomNguoi:"Nhóm người",_caNhan:"Cá nhân",_khac:"Khác"};
	public notification: Notification={
		COMPANY_NOTIFICATION_ID: 10,
		COMPANY_NOTIFICATION_CODE: "NOTE_001",
		COMPANY_NOTIFICATION_NAME: "Thông báo nghỉ lễ",
		COMPANY_NOTIFICATION_TYPE: "Khẩn cấp",
		COMPANY_NOTIFICATION_CONTENT: "Công chức, viên chức và người lao động có chế độ nghỉ ngày thứ Bảy thì được nghỉ liền 03 ngày, từ thứ Bảy ngày 01/09 đến hết thứ Hai ngày 03/09/2018.",
		APPLY_FOR_ID: 10,
		STATUS: 1,
		USER_CREATED: 10,
		USER_UPDATE: 10,
		DATE_CREATED: '14/08/2018',
		DATE_UPDATE: '14/08/2018'
		};
	public check: boolean=false;
  constructor(
  		public routerService: Router,
  		public activatedRoute: ActivatedRoute) { }
  ngOnInit() {
  }
  onAdd(){
  	this.check=true;
  	this.routerService.navigate(['notification/notification-add'], {
			relativeTo: this.activatedRoute.parent
		})
  
  }
  onEdit(){
  	this.check= true;
  	this.routerService.navigate(['notification/1/notification-edit'])
  
  }
  }

