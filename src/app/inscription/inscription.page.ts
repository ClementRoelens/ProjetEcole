import { Component, OnInit } from '@angular/core';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/user';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  user:User = {
    wallet:0,
    email:"exemple@exemple.com",
    password:"test",
    sex:2
  };

  constructor(private service:CantiniereAPIService) { }

  ngOnInit() {
  }

  register(){
    
  }

}
