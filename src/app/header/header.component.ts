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
  userImage:string = "/assets/images/clement.jpg";
  isConnected:boolean = true;
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

}

