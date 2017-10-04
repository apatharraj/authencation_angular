import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { ApiServiceService } from '../../../api-service.service'
import { UrlConfig } from '../../../shared/urlService';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private user: any = {
    "email": "",
    "username": "",
    "password": ""
  }
  private validate: any;
  private apiConfig: any;
  constructor(private apiService: ApiServiceService, private apiUrl: UrlConfig, private route: Router) {
    this.apiConfig = this.apiUrl;
  }

  register(formValid) {
    try {
      if (formValid.valid) {
        let url: any = this.apiConfig.apiEndPoint + this.apiConfig.users.register;
        this.apiService.noAuthPost(url, this.user).subscribe((res) => {
          if (res.result.success) {
            this.login(res.result.data);
          }
        }, (error) => { console.log(error) });
      }
    } catch (err) {
      console.log(err);
    }
  }

  login(user: any) {
    let url: any = this.apiConfig.apiEndPoint + this.apiConfig.users.login;
    let model: object = {
      "username": this.user.username,
      "password": this.user.password
    }
    this.apiService.noAuthPost(url, model).subscribe((res) => {
      window.sessionStorage.userDetail = JSON.stringify(res.result.user);
      window.sessionStorage.token = res.result.token;
      this.route.navigate(['/auth/profile', res.result.user._id]);
    }, (error) => {
      console.log(error);
    })
  }

  ngOnInit() {
  }

}
