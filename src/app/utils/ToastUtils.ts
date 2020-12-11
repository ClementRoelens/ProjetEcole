import { ToastController } from '@ionic/angular';

export class ToastUtils{

    static async presentToast(message: string, colorType: string, toastController: ToastController) {
        const toast = await toastController.create({
          message: message,
          duration: 2000,
          color: colorType
        });
        toast.present();
      }

}