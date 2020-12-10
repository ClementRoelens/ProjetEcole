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
  userImage:string = "/assets/images/clement.jpg";
  isConnected:boolean = false;
  currentPopover;
  
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
  
  async menuPopover (ev: any) {
    const popover = await this.popoverController.create({
      component: MypopComponent,
      cssClass: 'headerPopover',
      event: ev,
      translucent: true
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  
    // function dismissPopover() {
    //   if (currentPopover) {
    //     currentPopover.dismiss().then(() => { currentPopover = null; });
    //   }
    // }

    // customElements.define('popover-example-page', class ModalContent extends HTMLElement {
    //   connectedCallback() {
    //     this.innerHTML = `
    //       <ion-list>
    //         <ion-list-header>Ionic</ion-list-header>
    //         <ion-item button>Learn Ionic</ion-item>
    //         <ion-item button>Documentation</ion-item>
    //         <ion-item button>Showcase</ion-item>
    //         <ion-item button>GitHub Repo</ion-item>
    //         <ion-item lines="none" detail="false" button onClick="dismissPopover()">Close</ion-item>
    //       </ion-list>
    //     `;
    //   }
    // });
}

