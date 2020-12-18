import { Component, ElementRef, OnInit, ViewChild, AfterViewInit, Renderer2, OnChanges, SimpleChanges } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalPage } from '../modal/modal.page';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { CantiniereAPIService } from '../cantiniere-api.service';
import  moment from 'moment';

interface Meals {
  id: number
  description?:string
  src?:string
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
  id?:number
  imagePath:string
  image64:string
}
// const fs = require("fs")
// const download = require("downloadjs")
const URL ="http://localhost:8100/lunchtime/" 
// const moment = require('moment')
const LOW_SCREEN= '(max-width:767px)'
const HIGH_SCREEN = '(min-width:768px)'
const DEV_IMAGEBODY:Image={
  imagePath: "img/menu/default.png",
  image64:"data:image/jpeg;base64,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"
}

@Component({
  selector: 'app-menu-semaine',
  templateUrl: './menu-semaine.page.html',
  styleUrls: ['./menu-semaine.page.scss'],
})
export class MenuSemainePage implements OnInit,AfterViewInit,OnChanges {

weeklyMenu:Menus[] =[]
weeklyMeals:Meals[]=[]
vraiMenu:Menus[]
imageMenu:string
imageMeal:string
colSize:string
initMeal:Meals={
  id:null,
  src:null,
  label: "menu",
  status: null,
  imageId: null,
  priceDF: null,
  availableForWeeks:[],
  ingredients:[]
}
dashboard
@ViewChild('el')el

  constructor(public modalCtrl:ModalController,public breakpointObserver:BreakpointObserver,private apiService:CantiniereAPIService, private renderer:Renderer2 ) { 
    this.showMealImage.bind(this)
  }

  ngOnInit() {
    this.switchScreen()
    // console.log(this.showMenu())
    // this.showMenu()
    // console.log(this.showActualWeek().toString())
    this.DEV_shareMenuImg(4,DEV_IMAGEBODY)
    this.showMenuImage(4)
    // console.log("imageMenu: "+this.imageMenu)
    // console.log(this.element)
    // this.tableau.push(this.el)
  }

  ngAfterViewInit(){
    this.showMeal(this.showActualWeek())
    // Object.defineProperty(this.weeklyMeals[0], 'src',{value:this.imageMenu,writable: false})
    // console.log("this element: ",this.dashboard)
  
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log("caca")
  }
trackByFn(index, item){
  return index
}
//permet le partage des images avec les autres dev
//envoyer juste le body (voir interface Image)
  DEV_shareMenuImg(id:number= 4,body:Image){
    this.apiService.updateMenuImage(id,body).subscribe((result:Menus)=>{
        console.log("image "+result.id+" updated")
    })
  }
  
  switchScreen(){
    this.breakpointObserver.observe([
      LOW_SCREEN,
      HIGH_SCREEN
    ]).subscribe((size :BreakpointState)=>{
        Object.entries(size.breakpoints).map(([key,val])=>{
        if(key===LOW_SCREEN && val===true){
          this.colSize = "320px"
        }
        if(key===HIGH_SCREEN && val===true){
          this.colSize = "250px"
        }
      })
    })
  }

  showActualWeek():number{
    // return 50
    return moment().isoWeek()
  }
  updateChangedWeek(event:number){
    console.log("caca")
    console.log("ca marche! :",event)
    // return this.showMeal(event)
  }
  // sayCoucou(e){
  //   console.log(e)
  // }
  showMenuImage(id:number){
    this.apiService.getMenuImg(id)
    .subscribe((result:Image)=>{
      // console.log(result.image64)
      this.imageMenu = result.image64
      // console.log("imageMenu: "+this.imageMenu)
      Object.defineProperty(this.initMeal, 'src',{value:this.imageMenu,writable: true})
      this.weeklyMeals.push(this.initMeal)
    })
  }

  showMealImage(id:number){
    this.apiService.getMealImg(id)
    .subscribe((result:Image)=>{
      // console.log(result.image64)
      return result.imagePath
    })
  }
  showMeal(week:number){
    // if(week>52) week=1
    this.weeklyMeals.length=1
    this.apiService.getMeal(week)
    .subscribe((result:Meals[])=>{
      result.map((meal:Meals)=>{

        this.apiService.getMealImg(meal.id)
        .subscribe((result2:Image)=>{
          // console.log(result.image64)
          // return result2.imagePath
          let url =result2.image64
          // url = url.replace(/ /g,'%20')
          Object.defineProperty(meal, 'src',{value:url,writable: false})
        })
        // this.showMealImage.bind(MenuSemainePage)
        // let m= globalThis.showMealImage(meal.id)
        // console.log(m)
        // Object.defineProperty(meal, 'src',{value:m,writable: true})
        this.weeklyMeals.push(meal)
        // console.log(meal)
        
      })
       
      // this.showMealImage()
      
    })
  }
  // showMenu(){
  //   this.apiService.getMenu()
  //   .subscribe((result:Menus[])=>{
  //     result.map((menu:Menus)=>{
  //       if(menu.meals){
  //         let [...key]  = menu.meals
  //         if(menu.availableForWeeks.indexOf(this.showActualWeek())!==(-1)){
  //           this.weeklyMenu.push(menu)
  //           this.showMenuImage(4)
  //           console.log(this.weeklyMenu)
  //           for(let i=0;i<key.length;i++){
  //             if(key[i].availableForWeeks.indexOf(this.showActualWeek())!==(-1)){
  //               this.weeklyMeals.push(key[i])
  //               key[i].isAvailable = true
  //             }
  //           }
  //           console.log("meals: ",this.weeklyMeals)
  //         }
  //       }
  //     })
  //   })
  // }

  async showModal(meal:ElementRef){
    const modal = await this.modalCtrl.create({
      component: ModalPage,
      componentProps: {
        'meal': meal
      }
    })
    return await modal.present()
  }
}
