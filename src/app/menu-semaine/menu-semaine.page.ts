import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CantiniereAPIService } from '../cantiniere-api.service';

// interface Menu{
//   day:string
//   plat1:string[]
//   plat2:string[]

// }
interface Meals {
  id: number
  description?:string
  label: string
  status: number
  imageId: number
  priceDF: number
  availableForWeeks: number[]
  ingredients:Ingredients[]
  isAvailable?:boolean
}
interface Ingredients{
  id:number
  description?:string
  label:string
  status: number
  imageId: number
}
interface Menus{
  id: number
  description?: string
  label: string
  status: number
  imageId: number
  priceDF: number
  availableForWeeks:number[]
  meals:Meals[]
  

}
interface Image{
  id:number
  imagePath:string
  image64:string
}
const fs = require("fs")
// const download = require("downloadjs")
const moment = require('moment')
const LOW_SCREEN= '(max-width:767px)'
const HIGH_SCREEN = '(min-width:768px)'


@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.page.html',
  styleUrls: ['./menu-semaine.page.scss'],
})
export class MenuSemainePage implements OnInit {

weeklyMenu:Menus[] =[]
weeklyMeals:Meals[]=[]
vraiMenu:Menus[]
// menus:Menu[]=[
//   {
//     day:"lundi",
//     plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
//     plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
//   },
//   {
//     day:"mardi",
//     plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
//     plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
//   },
//   {
//     day:"mercredi",
//     plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
//     plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
//   },
//   {
//     day:"jeudi",
//     plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
//     plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
//   },
//   {
//     day:"vendredi",
//     plat1:["Melon","Sauce bolognaise végétale aux fèves et courgettesBIO","Pommes de terre grenaille","Yaourt nature"],
//     plat2:["Bruchetta mozzarella","Escalope de poulet Yassa","Semoule BIO","Fruit de saison"]
//   }
// ]
imageMenu:string
// mime:string
colSize:number |string
  constructor(public modalCtrl:ModalController,public breakpointObserver:BreakpointObserver,private apiService:CantiniereAPIService ) { }
nbWeek:any
  ngOnInit() {
    this.breakpointObserver.observe([
      LOW_SCREEN,
      HIGH_SCREEN
    ]).subscribe((size :BreakpointState)=>{
        Object.entries(size.breakpoints).map(([key,val])=>{
        console.log(key,val)
        if(key==LOW_SCREEN && val==true){
          this.colSize = "100% !important"
        }else{
          this.colSize = "25% !important"
        }
        // val?this.showMenu(key):null
      })
    })

    console.log(this.showMenu())
    console.log(this.showActualWeek().toString())
  }
  showActualWeek(){
    // return 2
    return moment().week()
  }
  showImage(id:number){
    this.apiService.getMenuImg(id)
    .subscribe((result:Image)=>{
      console.log(result.image64)
      this.imageMenu = result.image64
    })
    

  }
  showMenu(){
    this.apiService.getMenu()
    .subscribe((result:Menus[])=>{
      result.map((menu:Menus)=>{
        if(menu.meals){
          let [...key]  = menu.meals
          // console.log("caca : ", menu)
          // console.log("key,value: ",...key)
          // console.log(key.length)
          if(menu.availableForWeeks.indexOf(this.showActualWeek())!==(-1)){
            this.weeklyMenu.push(menu)
            this.showImage(menu.id)
            console.log(this.weeklyMenu)
            for(let i=0;i<key.length;i++){
              if(key[i].availableForWeeks.indexOf(this.showActualWeek())!==(-1)){
                this.weeklyMeals.push(key[i])
                key[i].isAvailable = true
              }
            }
            console.log("meals: ",this.weeklyMeals)
          }
          
        }
      })
    })
  }

  async showModal(menu, imageMenu){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'menu': menu,
        'image':imageMenu
      }
    })
    return await modal.present()
  }
  
}
