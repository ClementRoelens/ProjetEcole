import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';


interface Image{
  id:number
  imagePath:string
  image64:string
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  @Input()meal:ElementRef
  // @Input()image
  // @Input()src:string
  // image:string
  constructor(public modalCtrl: ModalController, public apiService:CantiniereAPIService) { }

  ngOnInit() {
    console.log(this.meal)
  }
  dismiss(){
    this.modalCtrl.dismiss()
  }
  // displayImage(id:number){
  //   this.apiService.getMealImg(id).subscribe((result:Image)=>{
  //     this.image = result.image64
  //   })
  // }
}
