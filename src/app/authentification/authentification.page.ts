import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { ToastUtils } from '../utils/ToastUtils';
import { JwtHelperService } from "@auth0/angular-jwt";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  isValid: boolean = false;
  userForm: FormGroup;
  rawToken: string;
  helper: JwtHelperService = new JwtHelperService()
  decodedToken;

  constructor(
    private formBuilder: FormBuilder,
    private service: CantiniereAPIService,
    private toastController: ToastController,
    private route: Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email: "",
      password: ""
    });

    this.userForm.valueChanges.subscribe(values => {
      let value = this.userForm.value;
      if ((value.email !== "") && (value.password !== "")) {
        this.isValid = true;
      }
      else {
        this.isValid = false;
      }
    });
  }
  authentificationKey(event){
    if (event.key == "Enter"){
      if (this.isValid){
        this.authentification();
      }
    }
  }

  authentification() {
    // On désactive toutes les actions le temps que la réponse du serveur arrive
    let body = document.querySelector('body');
    let elements: any = document.querySelectorAll('ion-input , ion-button');
    elements.forEach(element => {
      element.disabled = true;
    });
    body.style.cursor = "wait";

    this.service.authentification(this.userForm.value.email, this.userForm.value.password).subscribe(res => {
      this.rawToken = res.headers.get("Authorization");
      sessionStorage.setItem("JWT", this.rawToken);
      this.decodedToken = this.helper.decodeToken(this.rawToken);
      this.service.findImg(this.decodedToken.user.id, this.rawToken).subscribe((img: any) => {
        let storedUser = {
          "id": this.decodedToken.user.id,
          "name": this.decodedToken.user.name,
          "firstname": this.decodedToken.user.firstname,
          "email": this.decodedToken.user.email,
          "adress": this.decodedToken.user.address,
          "postalCode": this.decodedToken.user.postalCode,
          "town": this.decodedToken.user.town,
          "phone": this.decodedToken.user.phone,
          "sex": this.decodedToken.user.sex,
          "wallet": this.decodedToken.user.wallet,
          "image": img
        };
        sessionStorage.setItem("User", JSON.stringify(storedUser));
        // On laisse de nouveau l'utilisateur agir une fois la réponse reçue
        body.style.cursor = "initial"
        elements.forEach(element => {
          element.disabled = false;
        });
        this.route.navigate(["home"]);
      });
    },
    (error:any) => {
      if (error.status === 401)
        ToastUtils.presentToast("Mot de passe ou e-mail incorrect", "danger", this.toastController);
         // On laisse de nouveau l'utilisateur agir une fois la réponse reçue
        body.style.cursor = "initial"
        elements.forEach(element => {
          element.disabled = false;
        });
      });


  }
}
