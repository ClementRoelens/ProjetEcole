import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
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
    sessionStorage.removeItem("JWT");
    sessionStorage.removeItem("User");
    this.isConnected = false;
    if (this.route.url === "/home"){
      location.reload();
    }
    else {
      this.route.navigate(["home"]);
    }
    this.close();
  }
}
