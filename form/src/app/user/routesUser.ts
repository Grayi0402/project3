import { Routes } from '@angular/router';
import {UserComponentComponent} from './user-component/user-component.component';
import {HomePageComponent} from './component/home-page/home-page.component';
import {ManagedConfigComponent} from './component/managed-config/managed-config.component';
import {ManagedNotificationComponent} from './component/managed-notification/managed-notification.component';
import {ManagedProjectComponent} from './component/managed-project/managed-project.component';
import {ManagedSalaryComponent} from './component/managed-salary/managed-salary.component';
import {ManagedStaffComponent} from './component/managed-staff/managed-staff.component';
import {ManagedTimesheetComponent} from './component/managed-timesheet/managed-timesheet.component';
import{StaffInforComponent} from './component/managed-staff/staff-infor/staff-infor.component';
import {CvInforComponent} from './component/managed-staff/cv-infor/cv-infor.component';
import {DayOffComponent} from './component/managed-config/day-off/day-off.component';
import {ConfigSystemComponent} from './component/managed-config/config-system/config-system.component';
import {ObjectComponent} from './component/managed-config/object/object.component';
import { UserGuard } from '../user.guard';




export const routesUser: Routes = [
    {
        path: 'user',
        component: UserComponentComponent,
        canActivate: [UserGuard],
        children: [

            {
                path: '',
                component: UserComponentComponent,
                canActivate:[UserGuard],
                children: [
                    {
                        path: 'config',
                        component: ManagedConfigComponent,
                        children:[
                            {
                                path:'',
                                component: ManagedConfigComponent
                            },
                            {
                                path:'config-system',
                                component: ConfigSystemComponent
                            },
                            {
                                path:'object',
                                component: ObjectComponent
                            },
                            {
                                path:'day-off',
                                component: DayOffComponent
                            }
                        ]
                    },
                    {
                        path: 'notification',
                        component: ManagedNotificationComponent
                    },
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
                                component: ManagedStaffComponent
                            },
                            {
                                path:'staff-infor',
                                component: StaffInforComponent
                            },
                            {
                                path:'cv-infor',
                                component: CvInforComponent
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
            },

        ]
    }
]