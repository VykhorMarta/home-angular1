import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
import { AdminService } from './services/admin.service';
import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'users', component: UserComponent},
  {path: '', component: UserComponent}
  ]

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AdminService],
  bootstrap: [AppComponent]
})
export class AppModule { }
