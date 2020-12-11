import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.page.html',
  styleUrls: ['./menu-semaine.page.scss'],
})
export class MenuSemainePage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  }
  async showModal(){
    const modal = await this.modalCtrl.create({
      component: ModalPage
    })
    return await modal.present()
  }
  
}
