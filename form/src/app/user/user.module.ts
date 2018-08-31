//module
import { NgModule } from '@angular/core';
import { AllCommonModuleModule } from './../all-common-module/all-common-module.module'
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
//
import { UserComponentComponent } from './user-component/user-component.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ManagedConfigComponent } from './component/managed-config/managed-config.component';
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedProjectComponent } from './component/managed-project/managed-project.component';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { StaffInforComponent } from './component/managed-staff/staff-infor/staff-infor.component';
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';
import {routesUser} from './routesUser';
import { ConfigSystemComponent } from './component/managed-config/config-system/config-system.component';
import { ObjectComponent } from './component/managed-config/object/object.component';
import { DayOffComponent } from './component/managed-config/day-off/day-off.component';

@NgModule({
  imports: [
    CommonModule,
    AllCommonModuleModule,
    RouterModule.forChild(routesUser)
  ],
  declarations: [UserComponentComponent,
   HomePageComponent,
    ManagedConfigComponent,
     ManagedStaffComponent,
      ManagedProjectComponent,
       ManagedSalaryComponent,
        ManagedNotificationComponent,
         ManagedTimesheetComponent,
          StaffInforComponent,
           CvInforComponent,
           ConfigSystemComponent,
           ObjectComponent,
           DayOffComponent],
bootstrap:[UserComponentComponent],
    exports:[UserComponentComponent,ConfigSystemComponent] 
})

export class UserModule { }
