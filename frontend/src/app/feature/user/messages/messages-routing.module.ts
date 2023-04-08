import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessagesComponent } from './messages.component';
import {LayoutComponent} from "@core/layout/layout.component";
import {ContactListComponent} from "../../contact/contact-list/contact-list.component";
import {ContactFormComponent} from "../../contact/contact-form/contact-form.component";
import {ContactDetailsResolver} from "../../contact/contact.resolver";
import {ContactDetailsComponent} from "../../contact/contact-details/contact-details.component";

/* const routes: Routes = [{ path: '', component: MessagesComponent }]; */


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: "",
        component: MessagesComponent
      }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
