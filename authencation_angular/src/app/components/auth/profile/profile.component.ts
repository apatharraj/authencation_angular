import { Component, OnInit, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ApiServiceService } from '../../../api-service.service'
import { UrlConfig } from '../../../shared/urlService';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private apiUrl: any;
  private routerParams: any;
  private routeParam: string;
  private userProfile: any;
  private user: any = {
    "profile": "",
    "user_id": ""
  };
  constructor(private apiService: ApiServiceService, private apiConfig: UrlConfig, private routes: Router, private route: ActivatedRoute, private element: ElementRef) {
    this.apiUrl = this.apiConfig;
  }

  getProfile(): void {
    try {
      this.routerParams = this.route.params.subscribe(parameter => {
        this.routeParam = parameter.id;
        let url = this.apiUrl.users.getUserID + "/" + this.routeParam;
        this.apiService.get(url).subscribe((res) => {
          console.log(res);
          this.userProfile = res.result.data;
        }, (error) => {
          console.log(error);
        });
      });
    } catch (error) {

    }

  }

  saveProfile(): void {
    try {
      this.user.profile = document.getElementById("image").getAttribute("src");
      this.user.user_id = this.routeParam;
      let url = this.apiUrl.users.UpdateProfile + "/" + this.routeParam;
      this.apiService.put(url, this.user).subscribe((res) => {
        console.log(res);
      }, (error) => { console.log(error) });
    } catch (error) {

    }
  }

  fileChanged($event): void {
    let file: any = (<HTMLInputElement>this.element.nativeElement.querySelector('#file')).files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = function (e) {
      let getSrc = fileReader.result;
      document.getElementById("image").setAttribute("src", getSrc);
    }

  }

  ngOnInit() {
    this.getProfile();
  }

  ngOnDestroy() {
    this.routerParams.unsubscribe();
  }
}
