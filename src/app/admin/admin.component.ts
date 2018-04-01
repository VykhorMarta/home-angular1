import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  users: User[] = [];
  name: string;
  years: number;
    constructor(private adminService: AdminService, private router: Router) { }
  
    ngOnInit() {
      this.users =this.adminService.getUsers();
      console.log(this.users);
    }
  
    addNewUser(){
      let user = new User(this.name, this.years);
      this.adminService.addUser(user);
  
    }
  
    deleteUser(user: User){
      this.adminService.deleteUser(user);
  
    }
  
    goBack(){
      this.router.navigate(['/users']);
  
    }
  

}
