

import { Component, OnInit, ViewChild } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router'

import { FormGroup, FormBuilder, Validators } from '@angular/forms'
//service
import { HttpGetService } from './../../../../../Http-Services/http-get.service'
import { HttpPutService } from './../../../../../Http-Services/http-put.service';
import { Subscription, Observable } from 'rxjs';
//component
import { Staff } from './../../../../../model/staff.class'

@Component({
  selector: 'app-staff-list-detail',
  templateUrl: './staff-list-detail.component.html',
  styleUrls: ['./staff-list-detail.component.scss']
})
export class StaffListDetailComponent implements OnInit {
  // @ViewChild
  public errMsg: string = "";
  public id: number;
  public editStaff:Staff;
  public getStaff: any;
  public editForm: FormGroup;
  private api: string = "http://5b812a8497d8e500144f2ddc.mockapi.io/Staff";
  public subcription: Subscription;
  private lookStatus = [{
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
    private _httpPut: HttpPutService,


  ) { }

  ngOnInit() {
    //console.log(this.activateRoutes.snapshot.params['id'])
    this.editStaff=new Staff();
    this.createForm();
    this.activateRoutes.params.subscribe(data => {

      this.id = Number(data['id']);
    }
    )

    this._httpGet.getOne(this.api, Staff, this.id).subscribe(staff => {
    
      this.getStaff = staff.body;
      this.editForm.patchValue({
        name: this.getStaff.name,
        gender: this.getStaff.gender,
        birthday: this.getStaff.birthday,
        code: this.getStaff.code,
        temporaryAddress: this.getStaff.temporaryAddress,
        permanentAddress: this.getStaff.permanentAddress,
        identityCard: this.getStaff.identityCard,
        dateOfIssue: this.getStaff.dateOfIssue,
        placeOfIssue: this.getStaff.placeOfIssue,
        phone: this.getStaff.phone,
        email: this.getStaff.email,
        bankingAccount: this.getStaff.bankingAccount,
        taxCode: this.getStaff.taxCode,
        degree: this.getStaff.degree,
        startProbation: this.getStaff.startProbation,
        endProbation: this.getStaff.endProbation,
        startWorking: this.getStaff.startWorking,
        endWorking: this.getStaff.endWorking,
        position: this.getStaff.position,
        lookStatus: this.getStaff.lookStatus,
        linkCV: this.getStaff.linkCV,
        projectID: this.getStaff.projectID,
        education: this.getStaff.education
      })
    })
    
  }
  onEdit() {
    this.id = this.activateRoutes.snapshot.params['id'];
    this.routerService.navigate(['/admin/staff', this.id]);

  }
  createForm() {
    this.editForm = this.formBuilder.group({
      gender: ['', [Validators.required]
      ],
      name: [''],
      birthday: [''],
      code: [''],
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
      identityCard: ['', [Validators.required]],
      dateOfIssue: ['',
        [Validators.required,
        Validators.minLength(5),
        Validators.maxLength(30)
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
      degree: ['',
        [Validators.required,

        ]],
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
      position: ['',
        [Validators.required,
        ]],
      lookStatus: ['',
        [Validators.required,
        ]],
      linkCV: ['',
        [Validators.required,
        ]],
      projectID: [''],
      education: [null]

    });
    this.editForm.valueChanges.subscribe(data => {

    })
    // console.log('thach xau trai'+this.editForm.get.name)
  }
  onSubmitForm() {
    var a = new Date(this.editForm.value.startProbation);
    var day = a.getDate;
    console.log(this.editForm.value);
    this.editStaff.name=this.editForm.value.name;
    this.editStaff.code=this.editForm.value.code;
    this.editStaff.gender=this.editForm.value.gender;
    this.editStaff.birthday=this.editForm.value.birthday;
    this.editStaff.phone=this.editForm.value.phone;
    this.editStaff.email=this.editForm.value.email;
    this.editStaff.degree=this.editForm.value.degree;
    this.editStaff.lookStatus=this.editForm.value.lookStatus;
    this.editStaff.permanentAddress=this.editForm.value.permanentAddress;
    this.editStaff.temporaryAddress=this.editForm.value.temporaryAddress;
    this.editStaff.passport=this.editForm.value.passport;
    this.editStaff.dateOfIssue=this.editForm.value.dateOfIssue;
    this.editStaff.placeOfIssue=this.editForm.value.placeOfIssue;
    this.editStaff.taxCode=this.editForm.value.taxCode;
    this.editStaff.position=this.editForm.value.position;
    this.editStaff.startProbation=this.editForm.value.startProbation;
    this.editStaff.endProbation=this.editForm.value.endProbation;
    this.editStaff.startWorking=this.editForm.value.startWorking;
    this.editStaff.endWorking=this.editForm.value.endWorking;
    this.editStaff.bankingAccount=this.editForm.value.bankingAccount;
    this.editStaff.linkCV=this.editForm.value.linkCV;
    this.editStaff.projectID=this.editForm.value.projectID;
    this.editStaff.education=this.editForm.value.education;
    this.editStaff.id= this.id;
    this.editStaff.identityCard=this.editForm.value.identityCard;
//this.editStaff.lookStatus= this.editForm.value.lookStatus;
        //this.editStaff.address=this.editForm.value.address;
    //console.log(this.editStaff);
    this.onUpdate();
    this.routerService.navigate(['admin/staff/staff-list'])
  }
  onUpdate() {
    this.subcription = this._httpPut.updateData( this.api,this.editStaff).subscribe(data => {
      console.log(data);
      console.log(this.editStaff.id);
    },
      error => {
        this.errMsg = error;
      })
  }

}
