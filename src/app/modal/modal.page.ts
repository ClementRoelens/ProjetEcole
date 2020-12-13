import { Component, Input, OnInit } from '@angular/core';
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

  @Input()menu
  @Input()image
  // image:string
  constructor(public modalCtrl: ModalController, public apiService:CantiniereAPIService) { }

  ngOnInit() {
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
