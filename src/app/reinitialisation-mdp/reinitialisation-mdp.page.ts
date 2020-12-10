import { Component, OnInit } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { ToastController } from '@ionic/angular'

@Component({
  selector: 'app-reinitialisation-mdp',
  templateUrl: './reinitialisation-mdp.page.html',
  styleUrls: ['./reinitialisation-mdp.page.scss'],
})
export class ReinitialisationMdpPage implements OnInit {

  email: string
  isEmailValid: boolean = false

  constructor(private cantiniereApi: CantiniereAPIService, private toastController: ToastController) {}

  ngOnInit() {}

  onSend(){
    if (this.email != "" && this.verifyEmail(this.email)){

      // le mail est valide, envoi de la requete
      this.cantiniereApi.forgotPassword(this.email).subscribe((response) => {

        this.email = null

        this.presentToast("Un mail vient de vous être renvoyé", "success")

      }, (error) => {
        this.presentToast("Une erreur s'est produite : " + error.error.exceptionMessage, "danger")
      })
      
    } else {

      // fait apparaitre le message d'erreur (via le biding)
      this.isEmailValid = false
      this.presentToast("Veuillez saisir un mail valide", "danger")
    }
  }

  // vérifie la validité de l'email via une expression régulière
  verifyEmail(email: string): boolean {
    let regex = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
    return regex.test(email)
  }

  // active le button dès que l'user commence à saisir
  change(){
    this.isEmailValid = true
  }

  async presentToast(message: string, color: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      color: color
    });
    toast.present();
  }

}