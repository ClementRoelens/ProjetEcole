import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { ToastUtils } from '../utils/ToastUtils';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  isValid:boolean = false;
  userForm:FormGroup;

  constructor(
    private formBuilder: FormBuilder, 
    private service: CantiniereAPIService, 
    private toastController: ToastController,
    private router:Router
  ) { }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      email:"",
      password:""
    });

    this.userForm.valueChanges.subscribe(values => {
      let value = this.userForm.value;
      if ((value.email !== "" ) && (value.password !== "")){
        this.isValid = true;
      }
    });
  }

  authentification(){
    this.service.authentification(this.userForm.value.email,this.userForm.value.password).subscribe(res => {
      let token = res.headers.get("Authorization");
      sessionStorage.setItem("JWT", token);
      console.log(token);
      this.router.navigate(["home"]);
    },
    error => {
      ToastUtils.presentToast("Une erreur s'est produite","danger",this.toastController);
    });
  }
}
