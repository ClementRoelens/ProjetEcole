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
  // En plus du token brut, ces deux variables vont permettre d'en extraire l'utilisateur authentifié
  rawToken: string;
  helper: JwtHelperService = new JwtHelperService()
  decodedToken;
  // Cette variable, par défaut à false, passe à vrai si un token est présent en sessionStorage
  // Cela permet à la page de ne pas être affiché si l'utilisateur est déjà connecté
  isConnected:boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private service: CantiniereAPIService,
    private toastController: ToastController,
    private route: Router
  ) { }

  ngOnInit() {
    // Si un utilisateur est connecté, le template sera différent et on redirigera automatiquement vers l'accueil
    if (sessionStorage.getItem("JWT")){
      this.isConnected = true;
      setTimeout(()=>{
        this.route.navigate(['home']);
      },3000);
    }

    // On crée ce FormGroup pour réunir les données entrées par l'utilisateur
    this.userForm = this.formBuilder.group({
      email: "",
      password: ""
    });

    // Cet observable n'activera le bouton de validation que si les champs sont remplis 
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
    // Cette fonction lance la fonction d'identification quand l'utilisateur a le focus sur le champ de mot de passe et appuie sur Entrée
    if (event.key == "Enter"){
      if (this.isValid){
        this.authentification();
      }
    }
  }

  authentification() {
    // On désactive toutes les actions le temps que la réponse du serveur arrive (et on montre avec le curseur de la souris que le traitement est en cours)
    let body = document.querySelector('body');
    let elements: any = document.querySelectorAll('ion-input , ion-button');
    elements.forEach(element => {
      element.disabled = true;
    });
    body.style.cursor = "wait";
    // On fait la requête d'authentification
    this.service.authentification(this.userForm.value.email, this.userForm.value.password).subscribe(res => {
      // Une fois reçue, on stocke le JWT ainsi que sa version décodée, et on fait une seconde requête pour chercher l'avatar de l'utilisateur
      this.rawToken = res.headers.get("Authorization");
      sessionStorage.setItem("JWT", this.rawToken);
      this.decodedToken = this.helper.decodeToken(this.rawToken);
      this.service.findImg(this.decodedToken.user.id, this.rawToken).subscribe((img: any) => {
        // Maintenant on va créer un objet contenant les données de l'utilisateur, le stringifier et le stocker en sessionStorage
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
          "image": img,
          "isLunchLady": this.decodedToken.user.isLunchLady
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
      // Si les identifiants sont incorrects, on l'affiche
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
