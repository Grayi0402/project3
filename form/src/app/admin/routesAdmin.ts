import { Routes } from '@angular/router';
import { AdminComponentComponent } from './admin-component/admin-component.component'
import { ManagedConfigComponent } from './component/managed-config/managed-config.component'
import { ManagedNotificationComponent } from './component/managed-notification/managed-notification.component'
import { ManagedProjectComponent } from './component/managed-project/managed-project.component'
import { ManagedStaffComponent } from './component/managed-staff/managed-staff.component';
import { ManagedTimesheetComponent } from './component/managed-timesheet/managed-timesheet.component';
import { ManagedSalaryComponent } from './component/managed-salary/managed-salary.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { NotificationAddComponent } from './component/managed-notification/notification-add/notification-add.component'
import { CvInforComponent } from './component/managed-staff/cv-infor/cv-infor.component';
import { LoginGuard } from './../AdminLogin.guard';
import { NotificationEditComponent } from './component/managed-notification/notification-edit/notification-edit.component'

//thach - component
import {StaffListComponent} from './component/managed-staff/staff-list/staff-list.component'
import {StaffListAddComponent} from './component/managed-staff/staff-list/staff-list-add/staff-list-add.component'
import {StaffListDetailComponent} from './component/managed-staff/staff-list/staff-list-detail/staff-list-detail.component'

//linh
// import { StaffCvComponent } from './component/managed-staff/staff-cv/staff-cv.component'
// import { AddStaffCvComponent } from './component/managed-staff/staff-cv/add-staff-cv/add-staff-cv.component'
// import { EditStaffCvComponent } from './component/managed-staff/staff-cv/edit-staff-cv/edit-staff-cv.component'

export const routesAdmin: Routes = [
    {
        path: 'admin',
        component: AdminComponentComponent,
        canActivate: [LoginGuard],
        children: [

            {
                path: 'config',
                component: ManagedConfigComponent
            },
            {
                path: 'notification',
                component: ManagedNotificationComponent,
                children: [

                    {
                        path: 'notification-add',
                        component: NotificationAddComponent
                    },
                    
                ]
            },
            {
                path:'notification/:id',
                component: ManagedNotificationComponent,
                children:[
                    {
                        path: 'staff',
                        component: ManagedStaffComponent,
                        
                    },
                ]


            }
            ,
            {
                path: 'project',
                component: ManagedProjectComponent
            },
            {
                path: 'staff',
                component: ManagedStaffComponent,
                children:[
                            {
                                path:'',
                                component: HomePageComponent
                            },
                            {
                                path:'staff-list',
                                component:StaffListComponent,
                            },
                            {
                                path:'cv-infor',
                                component: CvInforComponent
                            },
                            {
                                path: 'staff-list-add',
                                component: StaffListAddComponent,
                            },
                            {
                                path:'cv-infor',
                                component: CvInforComponent,
                            },
                            // {
                            //     path: 'staffcv',
                            //     component: StaffCvComponent
                            // },
                            // {
                            //     path: 'addcv',
                            //     component: AddStaffCvComponent
                            // },
                            // {
                            //     path: 'editcv',
                            //     component: EditStaffCvComponent
                            // },
                            {
                                path: ':id/edit',
                                component: StaffListDetailComponent,
                            }
                        ]
            },
            {
                path: 'timesheet',
                component: ManagedTimesheetComponent
            },
            {
                path: 'salary',
                component: ManagedSalaryComponent
            },
            {
                path: 'index',
                component: HomePageComponent
            },


        ]
    }

]


