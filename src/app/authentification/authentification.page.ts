import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { ToastUtils } from '../utils/ToastUtils';
import { JwtHelperService } from "@auth0/angular-jwt";
import { Token } from '@angular/compiler/src/ml_parser/lexer';

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
    private router: Router
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
    });
  }

  authentification() {
    this.service.authentification(this.userForm.value.email, this.userForm.value.password).subscribe(res => {
      this.rawToken = res.headers.get("Authorization");
      sessionStorage.setItem("JWT", this.rawToken);
      this.decodedToken = this.helper.decodeToken(this.rawToken);
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
      };
      sessionStorage.setItem("User",JSON.stringify(storedUser));
      this.router.navigate(["home"]);
    },
      error => {
        ToastUtils.presentToast("Une erreur s'est produite", "danger", this.toastController);
      });
  }
}
