import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent }  from './Component/home/home.component'
import { DefaultComponent }  from './Component/default/default.component'
import { FormsModule } from '@angular/forms'
import { RouterModule } from '@angular/router'
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    HomeComponent,
    DefaultComponent

  ],
  exports:[HomeComponent,DefaultComponent]
})
export class AllCommonModuleModule { }
