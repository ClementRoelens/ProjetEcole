import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private service: CantiniereAPIService, private toastController: ToastController) { }

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
      this.service.register(this.user).subscribe((res:any) => {
        console.log(res.status);
      });
      // if (EmailUtils.verifyEmail(value.email)) {
       
      // }
      // else {
      //   ToastUtils.presentToast("Veuillez saisir un email valide", "danger", this.toastController);
      // }
    }
    else {
      ToastUtils.presentToast("Les deux mots de passe ne sont pas identiques", "danger", this.toastController);
    }
  }

}
