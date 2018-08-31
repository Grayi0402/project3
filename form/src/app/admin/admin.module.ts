
//module
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllCommonModuleModule } from './../all-common-module/all-common-module.module'
import { RouterModule } from '@angular/router';
import  {FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule } from '@angular/common/http'
//component
import { ManagedConfigComponent } from './component/managed-config/managed-config.component';
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component';
import { ManagedProjectComponent } from './component/managed-project/managed-project.component';
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { routesAdmin } from './routesAdmin';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';

import { NotificationAddComponent } from './component/managed-notification/notification-add/notification-add.component';
import { NotificationEditComponent } from './component/managed-notification/notification-edit/notification-edit.component';

import { StaffListAddComponent } from './component/managed-staff/staff-list/staff-list-add/staff-list-add.component'
import { StaffListDetailComponent } from './component/managed-staff/staff-list/staff-list-detail/staff-list-detail.component'
import { StaffListComponent } from './component/managed-staff/staff-list/staff-list.component';
import { ValidatorComponent } from './component/managed-staff/staff-list/validator/validator.component'

// import {StaffCvComponent} from './component/managed-staff/staff-cv/staff-cv.component'
// import {AddStaffCvComponent} from './component/managed-staff/staff-cv/add-staff-cv/add-staff-cv.component'
// import {EditStaffCvComponent} from './component/managed-staff/staff-cv/edit-staff-cv/edit-staff-cv.component'
// import {SearchStaffCvComponent} from './component/managed-staff/staff-cv/search-staff-cv/search-staff-cv.component'

@NgModule({
  imports: [
    CommonModule,
    AllCommonModuleModule,
    RouterModule.forChild(routesAdmin),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [ManagedConfigComponent,
    ManagedNotificationComponent,
    ManagedProjectComponent,
    ManagedStaffComponent,
    ManagedTimesheetComponent,
    AdminComponentComponent,
    ManagedSalaryComponent,
    HomePageComponent,
    CvInforComponent,
    NotificationAddComponent,
    NotificationEditComponent,
    //thach
    StaffListAddComponent,
    StaffListDetailComponent,
    StaffListComponent,
    ValidatorComponent,
    //linh
    // StaffCvComponent,
    // AddStaffCvComponent,
    // EditStaffCvComponent,
    // SearchStaffCvComponent,
   
    
    ],
    bootstrap:[AdminComponentComponent],
    exports:[AdminComponentComponent]
})
export class AdminModule { }
