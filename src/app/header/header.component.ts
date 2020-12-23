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
  user: User;  
  avatar: string = "assets/images/guest.png";
  isConnected: boolean = false;
  currentPopover;

  constructor(
    public popoverController: PopoverController,
    private service: CantiniereAPIService,
    private route: Router
  ) { }

  ngOnInit() {
    console.log("Header (OnInit début) : Valeur de isConnected à l'init : "+this.isConnected);
    let token: string = sessionStorage.getItem("JWT");
    // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
    if (token) {
      this.isConnected = true;
      console.log("Header (OnInit,token présent): valeur de isConnected : " + this.isConnected);
      let storedUser = JSON.parse(sessionStorage.getItem("User"));
      this.user = storedUser;
      let storedAvatar = sessionStorage.getItem("Avatar");
      // console.log("Header : Test de la présence de l'avatar en mémoire");
      if (!storedAvatar) {
        // console.log("Header : Avatar non présent, on fait donc une requête pour le chercher");
        this.service.findImg(this.user.id, token).subscribe((img: any) => {
          // console.log("Header : Avatar rendu par le serveur");
          this.avatar = "http://localhost:8080/lunchtime/" + img.imagePath;
          sessionStorage.setItem("Avatar", this.avatar);
        });
      }
      else {
        // console.log("Header : Avatar présent");
        this.avatar = storedAvatar;
        
      }
    }
    else{
      this.isConnected = false;
      console.log("Header (OnInit, pas de token) : Valeur de isConnected : "+this.isConnected);
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
    sessionStorage.removeItem("Avatar");
    this.avatar = "assets/images/guest.png";
    this.isConnected = false;
    console.log("Header (disconnect) : Valeur de isConnected : "+this.isConnected);
    this.route.navigate(["home"]);
  }

}

