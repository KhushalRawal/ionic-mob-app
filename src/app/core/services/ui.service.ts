import { Injectable } from '@angular/core';
import { AlertController, AlertOptions, ModalController, ModalOptions, PopoverController, PopoverOptions, ToastButton, ToastController, ToastOptions } from '@ionic/angular';
// import { Browser } from '@capacitor/browser';
import { ColorType } from '../models/types.model';

export type UIResultType = 'info' | 'warning' | 'error' | 'success';
export type ToastOptionsType = ToastOptions & {
  color?: ColorType;
  autoClose?: boolean;
  closeButton?: boolean;
};

export type AlertOptionsType = AlertOptions & {
  okButton?: boolean;
  okButtonText?: string;
};

@Injectable({
  providedIn: 'root'
})
export class UiService {
  mode: 'ios'| 'md'= 'md';
  defaultErrorMessage = 'Something went wrong, Please try again';

  constructor(
    private toastCtrl: ToastController,
    private alertCtrl: AlertController,
    private modalCtrl: ModalController,
    private popoverCtrl: PopoverController
  ) { }

  async showMessage(toastOptions: ToastOptionsType): Promise<void> {
    if(this.mode) {toastOptions.mode  = toastOptions.mode || this.mode;}
    if(toastOptions.autoClose == undefined) {toastOptions.autoClose = true;}
    if(toastOptions.autoClose && !toastOptions.duration) {toastOptions.duration = 2000;}
    if(toastOptions.closeButton){
      const closeBtn: ToastButton= {
        side: 'end',
        icon: 'close-circle-outline',
        role: 'cancel'
      };
      toastOptions.buttons = [...toastOptions.buttons || [] , closeBtn];
    }
    const toast = await this.toastCtrl.create(toastOptions);
    await toast.present();
  }

  async presentAlert(
    alertConfig: AlertOptionsType
  ): Promise<boolean> {
    if(alertConfig.okButton)
      {alertConfig.buttons= [...alertConfig.buttons || [], { text: alertConfig.okButtonText || 'Okay' }];}
    if(this.mode)
      {alertConfig.mode = alertConfig.mode || this.mode;}
    return new Promise(async (resolve) => {
      const alert = await this.alertCtrl.create(alertConfig);
      await alert.present();
    });
  }

  async presentAlertConfirm(
    header?: string,
    message?: string,
    okayText?: string,
    cancelText?: string,
    buttons?: string[]
  ): Promise<any> {
    return new Promise(async (resolve) => {
      const alertBtns = [
        {
          text: cancelText || 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (): void => resolve(false),
        },
        {
          text: okayText || 'Okay',
          role: 'ok',
          handler: (): void => resolve(true),
        },
      ];
      if (buttons) {
        for (const btn of buttons) {
          alertBtns.push({
            text: btn,
            handler: () => resolve(btn),
          } as any);
        }
      }
      const alert = await this.alertCtrl.create({
        header: header || 'Are you sure?',
        message: message || 'Please confirm your action.',
        buttons: alertBtns,
        mode: this.mode,
      });
      await alert.present();
    });
  }

  // async openExternalUrl(url: string) {
  //   await Browser.open({ url });
  // }

  async presentPopover(config: PopoverOptions){
    const popover = await this.popoverCtrl.create({
      component: config.component
    });
    await popover.present();
    return popover.onWillDismiss();
  }

  async dismissPopover<T = any>(data?: T, role?: string, id?: string){
    try{
      await this.popoverCtrl.dismiss(data, role, id);
    } catch (e: any) {
      console.error(e);
    }
  }

  async presentModal(options: ModalOptions){
    const modal = await this.modalCtrl.create(options);
    await modal.present();
    return await modal.onDidDismiss();
  }

  async dismissModal<T = any>(data?: T, role?: string, id?: string){
    try{
      await this.modalCtrl.dismiss(data, role, id);
    } catch (e: any) {
      console.error(e);
    }
  }
}
