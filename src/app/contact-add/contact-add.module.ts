import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContactAddPageRoutingModule } from './contact-add-routing.module';

import { ContactAddPage } from './contact-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContactAddPageRoutingModule
  ],
  declarations: [ContactAddPage]
})
export class ContactAddPageModule {}
