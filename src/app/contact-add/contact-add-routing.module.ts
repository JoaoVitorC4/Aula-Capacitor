import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContactAddPage } from './contact-add.page';

const routes: Routes = [
  {
    path: '',
    component: ContactAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactAddPageRoutingModule {}
