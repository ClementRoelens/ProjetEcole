import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';
import { MypopComponent } from './mypop/mypop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  user: User = {
    "id": null,
    "name": null,
    "firstname": null,
    "email": null,
    "postalCode": null,
    "town": null,
    "phone": null,
    "sex": null,
    "wallet": null,
    password: ""
  };
  avatar: string = "";
  isConnected: boolean = false;
  currentPopover;

  constructor(
    public popoverController: PopoverController,
    private service: CantiniereAPIService,
    private route: Router
  ) { }

  ngOnInit() {
    let token: string = sessionStorage.getItem("JWT");
    // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
    if (token) {
      console.log("token présent");
      this.isConnected = true;
      let storedUser = JSON.parse(sessionStorage.getItem("User"));
      for (let element in storedUser) {
        this.user[element] = storedUser[element];
      }
      let storedAvatar = sessionStorage.getItem("Avatar");
      if (!storedAvatar) {
        this.service.findImg(this.user.id, token).subscribe((img: any) => {
          this.avatar = "http://localhost:8080/lunchtime/" + img.imagePath;
          sessionStorage.setItem("Avatar", this.avatar);
        });
      }
      else {
        this.avatar = storedAvatar;
      }
    }
  }

  async menuPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MypopComponent,
      cssClass: 'headerPopover',
      event: ev,
      translucent: true,
      componentProps: {
        "isConnected": this.isConnected,
        "user": this.user
      }
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  disconnect() {
    sessionStorage.removeItem("JWT");
    sessionStorage.removeItem("UserId");
    this.avatar = "";
    this.route.navigate(["home"]);
  }

}

