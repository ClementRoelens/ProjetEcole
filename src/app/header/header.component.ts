import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, PopoverController } from '@ionic/angular';
import { CantiniereAPIService } from '../cantiniere-api.service';
import { User } from '../model/User';
import { MypopComponent } from './mypop/mypop.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements  OnInit {
  // Ces variables vont être bindées dans le template afin d'afficher :
  // - d'une part un header différent selon que l'utilisateur est authentifié ou non
  // - les infos de cet utilisateur (nom/prénom/avatar)
  @Input() user: User;
  @Input() avatar: string = "assets/images/guest.png";
  @Input() isConnected: boolean;
  // Les deux variables ci-dessus doivent être lues par la page Home, je n'ai pas trouvé d'autres moyens pour que cette page réinitialise ce composant Header
  currentPopover;

  constructor(
    public popoverController: PopoverController,
    private service: CantiniereAPIService,
    private route: Router,
    private nav:NavController
  ) { }

  ngOnInit() {
     let token: string = sessionStorage.getItem("JWT");
    // Si le token est présent, c'est que l'utilisateur est connecté et que ses données sont présentes dans le sessionStorage
      if (token) {
      this.isConnected = true;
      // Le sessionStorage ne pouvant contenir que des string, les infos de l'user sont au format JSON stringifié, qu'il faut donc parser pour les récupérer
      this.user = JSON.parse(sessionStorage.getItem("User"));
      this.avatar = "http://localhost:8080/lunchtime/";
      let image = (this.user.image.imagePath) ? this.user.image.imagePath : this.user.image.image64;
      this.avatar += image;
    }
    else {
      this.isConnected = false;
    }
  }

  async menuPopover(ev: any) {
    // Le PopOver permet d'ouvrir un menu sur le clique de l'icône burger sur portable
    const popover = await this.popoverController.create({
      component: MypopComponent,
      cssClass: 'headerPopover',
      event: ev,
      translucent: true,
      componentProps: {
        // On doit passer ces deux valeurs pour que le PopOver les affiche
        "isConnected": this.isConnected,
        "user": this.user
      }
    });
    this.currentPopover = popover;
    return await popover.present();
  }

  disconnect() {
    sessionStorage.removeItem("JWT");
    sessionStorage.removeItem("User");
    this.avatar = "assets/images/guest.png";
    this.isConnected = false;
    if (this.route.url === "/home"){
      location.reload();
    }
    else {
      this.route.navigate(["home"]);
    }
    // this.nav
  }

}

