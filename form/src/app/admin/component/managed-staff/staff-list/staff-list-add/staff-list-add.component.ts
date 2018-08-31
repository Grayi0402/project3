import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
//service
import { HttpGetService } from './../../../../../Http-Services/http-get.service'
import { HttpPostService } from './../../../../../Http-Services/http-post.service'

import { Subscription, Observable } from 'rxjs';
//component
import { Staff } from './../../../../../model/staff.class'

@Component({
  selector: 'app-staff-list-add',
  templateUrl: './staff-list-add.component.html',
  styleUrls: ['./staff-list-add.component.scss']
})
export class StaffListAddComponent implements OnInit, OnChanges {
  private checkForm: boolean = false;
  private staffAdd:Staff[];
  public id: number;
  public getStaff: Staff;
  public editForm: FormGroup;
  private api: string = "http://5b812a8497d8e500144f2ddc.mockapi.io/Staff";
  public subcription: Subscription;
  private status = [{
    name: "Đang làm việc", value: 1
  },
  {
    name: "Đã nghỉ việc", value: 0
  },
  {
    name: "Khác", value: 2
  }

  ]
  private education = [
    { name: "Đại học", value: 1 },
    { name: "Cao đẳng", value: 2 },
    { name: "Trung học", value: 3 },
    { name: "Khác", value: 4 }]
  private position = [
    { name: "Thực tập sinh", value: 0 },
    { name: "Người mới", value: 1 },
    { name: "Nhân viên chính thức", value: 2 },
    { name: "Nhân viên thời gian", value: 3 },
    { name: "Khác", value: 4 }]
  private gender = [
    { name: "Nam", value: 0 },
    { name: "Nữ", value: 1 }]

  constructor(
    private activateRoutes: ActivatedRoute,
    private formBuilder: FormBuilder,
    private routerService: Router,
    private _httpGet: HttpGetService,
    private _httpPost: HttpPostService
  ) { }

  ngOnInit() {
    this.createForm();

  }
  createForm(): any {
    this.editForm = this.formBuilder.group({
      gender: ['', [Validators.required]
      ],
      name: ['',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
        ]],
      birthday: [, [Validators.required]],
      code: ['',
        [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(30)
        ]],
      password: ['',
        [Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
        ]],
      temporaryAddress: ['',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
        ]],
      permanentAddress: ['',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
        ]],
      identityCard: [, [Validators.required]],
      dateOfIssue: [,
        [Validators.required,

        ]],
      placeOfIssue: ['',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
        ]],
      phone: [,
        [Validators.required,
        Validators.minLength(9),
        Validators.maxLength(12)
        ]],
      email: ['',
        [Validators.required,
        Validators.pattern('^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$')

        ]],
      bankingAccount: [''],
      taxCode: ['',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(10)
        ]],
      // degree: ['',
      // [Validators.required,

      // ]],
      startProbation: ['',
        [Validators.required,

        ]],
      endProbation: ['',
        [Validators.required,

        ]],
      startWorking: ['',
        [Validators.required,

        ]],
      endWorking: ['',
        [Validators.required,

        ]],
      position: [,
        [Validators.required,
        ]],
      status: ['',
        [Validators.required,
        ]],
      linkCV: ['',
      ],
      projectID: [''],
      education: ['']

    });
    this.editForm.valueChanges.subscribe(data => {

    })
    // console.log('thach xau trai'+this.editForm.get.name)
  }
  onSubmitForm() {
    console.log("hello lai");
          
    if (this.editForm.valid) {
      this.saveData();
      this._httpPost.add(this.getStaff,this.api).subscribe(data=>{
    
      })

    }
    else {
      alert('form khong hop le');

    }
    this.routerService.navigate(['admin/staff/staff-list']);

  }

  ngOnChanges() {

  }
  saveData() {
    this.getStaff=new Staff();
    this.getStaff.name = this.editForm.value.name;
    this.getStaff.code = this.editForm.value.code;
    this.getStaff.gender = this.editForm.value.gender;
    this.getStaff.birthday = this.editForm.value.birthday;
    this.getStaff.password = this.editForm.value.password;
    this.getStaff.permanentAddress=this.editForm.value.permanentAddress;
    this.getStaff.temporaryAddress=this.editForm.value.temporaryAddress;
    this.getStaff.identityCard=this.editForm.value.identityCard;
    this.getStaff.placeOfIssue=this.editForm.value.placeOfIssue;
    this.getStaff.email=this.editForm.value.email;
    this.getStaff.taxCode=this.editForm.value.taxCode;
    this.getStaff.startProbation=this.editForm.value.startProbation;
    this.getStaff.startWorking=this.editForm.value.startWorking;
    this.getStaff.phone=this.editForm.value.phone;
    this.getStaff.bankingAccount=this.editForm.value.bankingAccount;
    this.getStaff.education=this.editForm.value.education;
    this.getStaff.endWorking=this.editForm.value.endWorking;
    this.getStaff.endProbation=this.editForm.value.endProbation;
  }


}


