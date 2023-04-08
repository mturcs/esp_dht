// @ts-ignore
import { NgModule } from "@angular/core";
// @ts-ignore
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "@core/guards";
import {ContactModule} from "./feature/contact/contact.module";
import {UserModule} from "./feature/user/user.module";
import {MessagesModule} from "./feature/user/messages/messages.module";



// @ts-ignore
// @ts-ignore
// @ts-ignore
const routes: Routes = [
  {
    path: "",
    loadChildren: () => import("./feature/user/user.module").then((module) => module.UserModule)
  },
  {
    path: "contacts",
    canActivate: [AuthGuard],
    loadChildren: () => import("./feature/contact/contact.module").then((module) => module.ContactModule)
  },
  { path: 'messages',
    canActivate: [AuthGuard],
    loadChildren: () => import('./feature/user/messages/messages.module').then((module)  => module.MessagesModule)

  }
];

// @ts-ignore
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // relativeLinkResolution: "legacy"
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
