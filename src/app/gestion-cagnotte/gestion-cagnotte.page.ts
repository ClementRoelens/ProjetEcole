import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// import { userInfo } from 'os';
import { User } from '../model/User';

@Component({
  selector: 'app-gestion-cagnotte',
  templateUrl: './gestion-cagnotte.page.html',
  styleUrls: ['./gestion-cagnotte.page.scss'],
})
export class GestionCagnottePage implements OnInit {

  unNomUser : string = "";
  unPrenomUser : string = "";
  unEmailUser : string = "";
  unTelUser : string = "";
  uneCagnotteUser : string ="";


  ListUsers:User[] = [
    { id:0, name:"Jean", firstname:"Transcène", password:"pwd", email:"Jean.Transcène@gmail.com", phone: "0650231845", wallet: 45},
    { id:0, name:"Sarah", firstname:"Croche", password:"pwd", email:"Sarah.Croche@gmail.com", phone: "0650231845", wallet: 2},
    { id:0, name:"Alex", firstname:"Tèrieure", password:"pwd", email:"Alex.Tèrieure@gmail.com", phone: "0650231845", wallet: 780}
  ]



  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    let UserId:string = this.route.snapshot.paramMap.get("id");
    this.unNomUser=this.ListUsers[UserId].name;
    this.unPrenomUser=this.ListUsers[UserId].firstname;
    this.unEmailUser=this.ListUsers[UserId].email;
    this.unTelUser=this.ListUsers[UserId].phone;
    this.uneCagnotteUser=this.ListUsers[UserId].wallet;
    
  }

}
