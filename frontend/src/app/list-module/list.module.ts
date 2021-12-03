import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IpListComponent } from './ip-list/ip-list.component';
import { IpListitemComponent } from './ip-listitem/ip-listitem.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    IpListComponent,
    IpListitemComponent
  ],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatButtonModule
  ],
  exports: [
    IpListComponent,
    IpListitemComponent
  ],
})
export class ListModule { }
