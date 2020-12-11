import { Component, OnInit } from '@angular/core';
import { GestionCagnottePage } from '../gestion-cagnotte/gestion-cagnotte.page';
import { Router, RouterLink } from '@angular/router';
import { User } from '../model/User';

@Component({
  selector: 'app-gestion-user',
  templateUrl: './gestion-user.page.html',
  styleUrls: ['./gestion-user.page.scss'],
})
export class GestionUSerPage implements OnInit {

  constructor() { }

  id: number;

  ListUsers:User[] = [
    { id:0, name:"Jean", firstname:"Transcène", password:"pwd", email:"Jean.Transcène@gmail.com", phone: "0650231845", wallet: 45},
    { id:0, name:"Sarah", firstname:"Croche", password:"pwd", email:"Sarah.Croche@gmail.com", phone: "0650231845", wallet: 2},
    { id:0, name:"Alex", firstname:"Tèrieure", password:"pwd", email:"Alex.Tèrieure@gmail.com", phone: "0650231845", wallet: 780}
  ]

  ngOnInit() {
  }

}
