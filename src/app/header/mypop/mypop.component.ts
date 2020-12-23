import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-mypop',
  templateUrl: './mypop.component.html'
})
export class MypopComponent implements OnInit {

  @Input("user") user:string;
  @Input("isConnected") isConnected:boolean;

  constructor(public popover: PopoverController, private route:Router) { }

  ngOnInit() { }
  
  close(){
    this.popover.dismiss();
  }

  disconnect(){
    this.isConnected = false;
    sessionStorage.removeItem("JWT");
    sessionStorage.removeItem("User");
    sessionStorage.removeItem("Avatar");
    this.route.navigate(['home']);
    this.close();
  }
}
