import { Component, Input, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mypop',
  templateUrl: './mypop.component.html'
})
export class MypopComponent implements OnInit {

  @Input("user") user:string;
  @Input("isConnected") isConnected:boolean;

  constructor(public popover: PopoverController) { }

  ngOnInit() { }
  
  close(){
    this.popover.dismiss();
  }

  disconnect(){
    this.isConnected = false;
    this.close();
  }
}
