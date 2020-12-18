import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/user';
import { EmailUtils } from '../utils/EmailUtils';
import { ToastUtils } from '../utils/ToastUtils';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  user: User = {
    name: undefined,
    firstname: undefined,
    email: undefined,
    password: undefined,
    wallet: 0,
    sex: undefined
  };
  userForm: FormGroup;
  isValid: boolean = false;

  constructor(
    private formBuilder: FormBuilder, 
    private service: CantiniereAPIService, 
    private toastController: ToastController,
    private router:Router) { }

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      name: "",
      firstname: "",
      sex: "",
      email: "",
      password: "",
      passwordCheck: ""
    });

    this.userForm.valueChanges.subscribe(values => {
      let value = this.userForm.value;
      let tempValid: boolean = true;
      for (let property in value) {
        if (!value[property]) {
          tempValid = false;
          break;
        }
      }
      this.isValid = tempValid;
    });
  }

  register() {
    let value = this.userForm.value;
    if (this.userForm.value.password === this.userForm.value.passwordCheck) {
      for (let property in this.userForm.value){
        if (property != "passwordCheck"){
          this.user[property] = this.userForm.value[property];
        }
      }
      // Variables utilisées pour l'affichage
      let body = document.querySelector("body");
      let elements:any = document.querySelectorAll("ion-input , ion-button , ion-select");
      this.service.register(this.user).subscribe(
        (res:any) => {
          elements.forEach(element => {
            element.disabled = false;
          });
          body.style.cursor = "initial";
          ToastUtils.presentToast("Utilisateur créé!","danger",this.toastController);
          this.router.navigate(["home"]);
          // Ajouter ici le code pour authentifier l'utilisateur
        },
        (error:any) => {
          if (error.status === 412){
            this.userForm = this.formBuilder.group({
              name: this.user.name,
              firstname: this.user.firstname,
              sex: this.user.sex,
              email: "Veuillez saisir un autre e-mail",
              password: this.user.password,
              passwordCheck: this.user.password
            });
            ToastUtils.presentToast("Cet e-mail est déjà utilisé","danger",this.toastController);
            let mail:any = document.querySelector("ion-input[formControlName='email']");
            mail.style.color = "red";
            setTimeout(()=>{
              mail.style.color = "black";
            },1500);
          }
          else {
            //DEBUG
            console.log("Autre erreur");
            this.ngOnInit();
            ToastUtils.presentToast("Une erreur s'est produite","danger",this.toastController);
          }
        }
      );
      // On désactive les input et le bouton de validation et on affiche le curseur d'attente jusqu'à ce que la requête soit traitée
      elements.forEach(element => {
        element.disabled = true;
        element.style.cursor = "wait";
      });
      body.style.cursor = "wait";
      if (EmailUtils.verifyEmail(value.email)) {
       
      }
      else {
        ToastUtils.presentToast("Veuillez saisir un email valide", "danger", this.toastController);
      }
    }
    else {
      ToastUtils.presentToast("Les deux mots de passe ne sont pas identiques", "danger", this.toastController);
    }
  }

}
