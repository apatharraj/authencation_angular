import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from '../../../api-service.service'
import { UrlConfig } from '../../../shared/urlService';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private user: any = {
    "username": "",
    "password": ""
  }
  private apiConfig: any;
  constructor(private apiService: ApiServiceService, public apiUrl: UrlConfig, private route: Router) {
    this.apiConfig = this.apiUrl;
  }

  login(formValid) {
    if (formValid.valid) {
      let url: any = this.apiConfig.apiEndPoint + this.apiConfig.users.login;
      let model = {
        "username": this.user.username,
        "password": this.user.password
      };
      this.apiService.noAuthPost(url, model).subscribe((res) => {
        if (res.result.success) {
          window.sessionStorage.userDetail = JSON.stringify(res.result.user);
          window.sessionStorage.token = res.result.token;
          this.route.navigate(['/auth/profile', res.result.user._id]);
        }
      }, (error) => { console.log(error, "Error") });
    }
  }

  ngOnInit() {
  }

}
