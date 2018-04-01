import { Component, OnInit } from '@angular/core';
import { User } from '../user.module';
import { AdminService } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];
  
  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit() {
    this.users = this.adminService.getUsers();
  }

  goToAdmin(){
  this.router.navigate(['/admin']);
  }

}
