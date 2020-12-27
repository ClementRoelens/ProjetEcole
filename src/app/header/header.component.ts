import { Component, Input, OnInit, OnChanges } from '@angular/core';
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
export class HeaderComponent implements OnChanges, OnInit {
  user: User;
  @Input() avatar: string = "assets/images/guest.png";
  @Input() isConnected: boolean;
  currentPopover;

  constructor(
    public popoverController: PopoverController,
    private service: CantiniereAPIService,
    private route: Router
  ) { }

  ngOnInit() {
    this.initialization();
  }

  ngOnChanges() {
    this.initialization();
  }

  initialization() {
    let token: string = sessionStorage.getItem("JWT");
    // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
    if (token) {
      this.isConnected = true;
      this.user = JSON.parse(sessionStorage.getItem("User"));
      this.avatar = "http://localhost:8080/lunchtime/"+this.user.image.imagePath;
    }
    else {
      this.isConnected = false;
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
    sessionStorage.removeItem("User");
    this.avatar = "assets/images/guest.png";
    this.isConnected = false;
    this.route.navigate(["home"]);
  }

}

