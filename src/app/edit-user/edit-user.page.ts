import { Component, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private service: CantiniereAPIService, private toastController: ToastController) {}

  // TODO: implémenter user
  user: User = {id: 101,  
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

  userForm: FormGroup
  isValidateEnabled: boolean = false

  ngOnInit() {

    this.userForm = this.formBuilder.group({
      email: undefined,
      verifyEmail: undefined,
      adress: undefined,
      phone: undefined
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

        //this.service.updateUser(this.user, "TOKEN...")

      } else {
        ToastUtils.presentToast("Veuillez saisir un email valide", "danger", this.toastController)
      }
    } else {
      ToastUtils.presentToast("Les emails ne sont pas identiques", "danger", this.toastController)
    }
  }
}
