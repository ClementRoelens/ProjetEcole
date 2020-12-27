import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  isConnected: boolean = false;
  avatar: string = "assets/images/guest.png";

  constructor() { }

  ionViewWillEnter() {
    let token = sessionStorage.getItem("JWT");
    if (token) {
      this.isConnected = true;
      let user = JSON.parse(sessionStorage.getItem("User"));
      this.avatar = "http://localhost:8080/lunchtime/"+user.image.imagePath;
    }
    else {
      this.isConnected = false;
      this.avatar = "assets/images/guest.png";
    }
  }


}
