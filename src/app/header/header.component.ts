import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MypopComponent } from './mypop/mypop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username:string = "Cantinière";
  // Pour le développement la valeur est en dure
  userImage:string;
  isConnected:boolean = true;
  currentPopover;
  
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {
    this.userImage = (this.isConnected) ? "/assets/images/clement.jpg" : "/assets/images/guest.png";
  }
  
  async menuPopover (ev: any) {
    const popover = await this.popoverController.create({
      component: MypopComponent,
      cssClass: 'headerPopover',
      event: ev,
      translucent: true,
      componentProps:{
        "isConnected":this.isConnected,
        "username":this.username
      }
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  disconnect(){
    // Bien entendu, cette ligne n'est là que pour le test visuel
    this.isConnected = false;
    this.userImage = "/assets/images/guest.png";
  }

}

