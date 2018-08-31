import {  Routes } from '@angular/router';
import { LoginToRoleComponent } from './login/login-to-role.component'
import { CheckedLoginGuard } from './checked-login.guard'
export const appRoutes: Routes = [
	{
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
	{
		path:'login',
		component:LoginToRoleComponent,
		canActivate:[CheckedLoginGuard]
	},
	{
		path:'**',
		redirectTo:'login',
		pathMatch:'full'

	}	
]