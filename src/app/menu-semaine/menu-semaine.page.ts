import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';

interface Menu{
  day:string
  plat1:string[]
  plat2:string[]

}

@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.page.html',
  styleUrls: ['./menu-semaine.page.scss'],
})
export class MenuSemainePage implements OnInit {
  
menus:Menu[]=[
  {
    day:"lundi",
    plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
    plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
  },
  {
    day:"mardi",
    plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
    plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
  },
  {
    day:"mercredi",
    plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
    plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
  },
  {
    day:"jeudi",
    plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
    plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
  },
  {
    day:"vendredi",
    plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
    plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
  }
]
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
