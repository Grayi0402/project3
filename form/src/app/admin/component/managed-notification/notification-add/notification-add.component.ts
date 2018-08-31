import { Component, OnInit } from '@angular/core';
import  { Notification }	from './../notification.class'
import { FormControl } from '@angular/forms'
import  { Validators } from '@angular/forms'
import { FormGroup} from '@angular/forms'
import { FormBuilder} from '@angular/forms'
import { FormArray} from '@angular/forms'
@Component({
  selector: 'app-notification-add',
  templateUrl: './notification-add.component.html',
  styleUrls: ['./notification-add.component.css']
})
export class NotificationAddComponent implements OnInit {

  public frmNote: FormGroup; 
  constructor(private fb:FormBuilder) { }

ngOnInit() {
  	this.createForm();
  }
  createForm(){
 	this.frmNote=this.fb.group({
 		COMPANY_NOTIFICATION_ID: ['1',[Validators.required]],
 		COMPANY_NOTIFICATION_CODE:['NOTE_002',[Validators.required]],
 		COMPANY_NOTIFICATION_NAME: ['',[
 			Validators.required,
 			Validators.minLength(3),
 			Validators.maxLength(20) 
 		]],
 		COMPANY_NOTIFICATION_TYPE: [''
 		],
 		COMPANY_NOTIFICATION_CONTENT: ['',[
 			Validators.required
 		]],
 		DATE_CREATED: ['14/08/2018',[
 			Validators.required
 		]],
 		USER_CREATED: ['10',[
 			Validators.required
 		]],
 		DATE_UPDATE: ['14/08/2018',[
 			Validators.required
 		]],
 		USER_UPDATE: ['10',[
 			Validators.required
 		]],
 		STATUS: ['1',[
 			Validators.required
 		]],

 		APPLY_FOR_ID: ['',[
 			Validators.required
 		]]
 	})
}	
public typeNotification={_thTin:"Thông tin",_khCap:"Khẩn cấp",_deNghi:"Đề nghị",_khac:"Khác"};
	public quyMo={_toanCty:"Toàn công ty",_chiNhanh:"Chi nhánh",_nhomNguoi:"Nhóm người",_caNhan:"Cá nhân",_khac:"Khác"};

onSubmitForms(){
		console.log(this.frmNote);
	}
	public text: string="Thông tin";
	add(){
	}

}
