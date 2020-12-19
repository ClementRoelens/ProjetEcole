import { Component, OnInit } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { ToastController } from '@ionic/angular'
import { EmailUtils } from '../utils/EmailUtils';
import { ToastUtils } from '../utils/ToastUtils';

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
    if (this.email != "" && EmailUtils.verifyEmail(this.email)){

      // le mail est valide, envoi de la requete
      this.cantiniereApi.forgotPassword(this.email).subscribe((response: any) => {
        
        this.email = null

        ToastUtils.presentToast("Un mail vient de vous être renvoyé", "success", this.toastController)

      }, (error) => {
        ToastUtils.presentToast("Une erreur s'est produite : " + error.error.exceptionMessage, "danger", this.toastController)
      })
      
    } else {

      // fait apparaitre le message d'erreur (via le biding)
      this.isEmailValid = false
      ToastUtils.presentToast("Veuillez saisir un mail valide", "danger", this.toastController)
    }
  }

  // active le button dès que l'user commence à saisir
  change(){
    this.isEmailValid = true
  }

}