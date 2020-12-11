import { Component, OnInit } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';

@Component({
  selector: 'app-infos-user',
  templateUrl: './infos-user.page.html',
  styleUrls: ['./infos-user.page.scss'],
})
export class InfosUserPage implements OnInit {

  constructor(private service: CantiniereAPIService) { }

  user: User

  ngOnInit() {

    // creation d'un "faux" user de test pour le biding
    this.user = {id: 101,
      adress: "Test d'adresse",
      wallet: 999,
      postalCode: "59100",
      email: "mail@gmail.com",
      isLunchLady: false,
      password: "monMotDePasse",
      name: "Doe",
      firstname: "John",
      phone: "0123456789",
      town: "Washington Township",
      sex: 0,
      image: {imagePath: "../../assets/images/logo.png",
              image64: ""}}

      // TODO: à implémenter quand on aura un user connecté dans la session
      /*
      this.service.findUser(idUser).subscribe((response) => {
        
        console.log(response)
        this.user = response

      }, (error) => {
        
        console.log(error)

      })
      */

  }

}
