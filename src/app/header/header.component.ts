import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MypopComponent } from '../popovers/mypop/mypop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  username:string = "Cantinière";
  userImage:string = "/assets/images/clement.jpg";
  isConnected:boolean = false;
  
  constructor(public popoverController: PopoverController) { }

  ngOnInit() {}
  
  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: MypopComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true
    });
    return await popover.present();
  }
}
}
