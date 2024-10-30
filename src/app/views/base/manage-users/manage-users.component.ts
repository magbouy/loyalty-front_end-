import {Component, OnInit} from '@angular/core';
import {PlatformUser} from "../../../models/platformUser";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit{
  platformUsers: PlatformUser[] = [];

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.getAllUsers();
  }

  private getAllUsers() {
    this.userService.getAllUsers().subscribe(users => {
      this.platformUsers = users
      // console.log(users);
    })
  }


  removeUser(id) {
    alert(`Are you sure you want to delete this user: ${id}?`)
  }
}
