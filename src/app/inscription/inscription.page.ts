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
  isConnected: boolean = false;
  passwordRule : boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CantiniereAPIService,
    private toastController: ToastController,
    private router: Router) { }

  ngOnInit() {
    // Si un utilisateur est connecté, le template sera différent et on redirigera automatiquement vers l'accueil
    if (sessionStorage.getItem("JWT")) {
      this.isConnected = true;
      setTimeout(() => {
        this.router.navigate(['home']);
      }, 3000);
    }


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
    // On vérifie que les deux mots de passe sont identiques
    if (this.userForm.value.password === this.userForm.value.passwordCheck) {
      // Puis la robustesse du mot de passe
      if (this.passwordStrenghtTest(this.userForm.value.password)) {
        // On va itérer sur userForm et attribuer ses propriétés à notre variable User
        for (let property in this.userForm.value) {
          // Sauf pour passwordCheck puisque cette propriété n'existe pas
          if (property != "passwordCheck") {
            this.user[property] = this.userForm.value[property];
          }
        }
        // Variables utilisées plus tard pour empêcher puis réautoriser les différentes actions faisables par l'utilisateur
        let body = document.querySelector("body");
        let elements: any = document.querySelectorAll("ion-input , ion-button , ion-select");
        this.service.register(this.user).subscribe(
          (res: any) => {
            // Une fois la requête reçue, on autorisera de nouveau ces actions
            elements.forEach(element => {
              element.disabled = false;
            });
            body.style.cursor = "initial";
            ToastUtils.presentToast("Utilisateur créé!", "danger", this.toastController);
            this.router.navigate(["home"]);
          },
          (error: any) => {
            if (error.status === 412) {
              // Si le problème est que le mail existe déjà, on l'indique en changeant cette valeur dans le formulaire
              this.userForm = this.formBuilder.group({
                name: this.user.name,
                firstname: this.user.firstname,
                sex: this.user.sex,
                email: "Veuillez saisir un autre e-mail",
                password: this.user.password,
                passwordCheck: this.user.password
              });
              ToastUtils.presentToast("Cet e-mail est déjà utilisé", "danger", this.toastController);
              let mail: any = document.querySelector("ion-input[formControlName='email']");
              mail.style.color = "red";
              setTimeout(() => {
                mail.style.color = "black";
              }, 1500);
            }
            else {
              // Si une autre erreur se produit
              this.ngOnInit();
              ToastUtils.presentToast("Une erreur s'est produite", "danger", this.toastController);
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
        ToastUtils.presentToast("Votre mot de passe n'est pas assez robuste","danger",this.toastController);
        this.passwordRule = true;
        }
    }
    else {
      ToastUtils.presentToast("Les deux mots de passe ne sont pas identiques", "danger", this.toastController);
    }
  }

  registerKey(event) {
    // Cet événement est lancé quand l'utilisateur appuie sur la touche Entrée quand il est dans le dernier input
    if (event.key == "Enter") {
      if (this.isValid) {
        this.register();
      }
    }
  }

  passwordStrenghtTest(password: string): boolean {
    // Ce test et ces RegExp vont vérifier que le mot de passe fait au moins 8 caractères de long, contient au moins une minuscule, une majuscule, un chiffre et un caractère spécial
    if (password.length >= 8) {
      let rule1 = /[a-z]/;
      let rule2 = /[A-Z]/;
      let rule3 = /\d/;
      let rule4 = /\W/;
      
      let result1 = password.match(rule1);
      let result2 = password.match(rule2);
      let result3 = password.match(rule3);
      let result4 = password.match(rule4);
      
      if (result1 && result2 && result3 && result4){
        return true;
      }
      else{
        return false;
      }
    }
  }

}
