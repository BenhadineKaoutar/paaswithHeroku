import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: any={};
  constructor(public authService: AuthService,private _httpClient: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    console.log("before API call");

    return this._httpClient.get("https://us-central1-bass-d4671.cloudfunctions.net/helloWorld").subscribe(dataFirestore => {
      console.log("data", dataFirestore);
      this.data=dataFirestore;
    })
  }

}