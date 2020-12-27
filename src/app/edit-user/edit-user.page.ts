import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';
import { EmailUtils } from '../utils/EmailUtils';
import { ToastUtils } from '../utils/ToastUtils';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.page.html',
  styleUrls: ['./edit-user.page.scss'],
})
export class EditUserPage implements OnInit {

  constructor(private formBuilder: FormBuilder, private service: CantiniereAPIService, private toastController: ToastController, private route: ActivatedRoute) {}

  token: string
  user: User
  userForm: FormGroup
  isValidateEnabled: boolean = false

  ngOnInit() {

    // User et Token recupéré depuis la sessionStorage
    // ils existent forcement car on ne peut acceder à cette page que si on est connecté
    this.user = JSON.parse(sessionStorage.getItem("User"))
    this.token = sessionStorage.getItem("JWT")

    //let userId = this.route.snapshot.paramMap.get("id")

    this.userForm = this.formBuilder.group({
      email: this.user.email,
      verifyEmail: this.user.email,
      adress: this.user.adress,
      phone: this.user.phone
    })

    this.userForm.valueChanges.subscribe(values => {
      
      if(values.email != "" && values.verifyEmail != "" && values.adress != "" && values.phone != null){
        this.isValidateEnabled = true
      } else this.isValidateEnabled = false

    })
  }

  onValidate(){
    let values = this.userForm.value

    if(values.email.toLowerCase() == values.verifyEmail.toLowerCase()){
      if(EmailUtils.verifyEmail(values.email)){
        
        this.user.email = values.email.toLowerCase()
        this.user.adress = values.adress
        this.user.phone = values.phone
        
        this.service.updateUser(this.user, this.token).subscribe((response) => {

          ToastUtils.presentToast("Informations modifées avec succès", "success", this.toastController)

          // mise à jour de l'utilisateur en sessionStorage
          sessionStorage.setItem("User", JSON.stringify(this.user))

        }, (error) => {
          ToastUtils.presentToast("Une erreur s'est produite", "danger", this.toastController)
        })

      } else {
        ToastUtils.presentToast("Veuillez saisir un email valide", "danger", this.toastController)
      }
    } else {
      ToastUtils.presentToast("Les emails ne sont pas identiques", "danger", this.toastController)
    }
  }
}
