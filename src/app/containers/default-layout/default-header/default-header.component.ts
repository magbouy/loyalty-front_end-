import {Component, Input, OnInit} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ClassToggleService, HeaderComponent } from '@coreui/angular';
import {Router} from "@angular/router";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent implements OnInit {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)
  userEmail

  username = localStorage.getItem('username');

  constructor(private classToggler: ClassToggleService, private toastr: ToastrService, private router: Router, private authService: AuthService) {
    super();
  }

  logout() {
    localStorage.clear();
    console.clear();
    this.router.navigate(["login"]).then();
    this.toastr.success("logout successful");
  }

  ngOnInit(): void {
    // this.userEmail = this.authService.userdata['email']
    let tokenValue = localStorage.getItem('token')
    let user_payload = `${tokenValue}`.split('.')[1]
    let userdata = JSON.parse(atob(user_payload))
    this.userEmail = userdata['email']
  }
}
