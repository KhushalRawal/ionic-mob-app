import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UiService } from '../core/services/ui.service';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {
  constructor(private uiService:UiService,
    private modalCtrl: ModalController) {}

  // open(){
  //   this.uiService.presentModal({
  //     component:ExploreContainerComponent,
  //     componentProps:{
  //       label:'Test'
  //     }
  //   })
  // }
  async openModal() {
    const modal = await this.modalCtrl.create({
      component: ExploreContainerComponent,
      componentProps:{
        label:'HI',
        content:'Test'
      },
      cssClass:'otp-modal',
      initialBreakpoint: 1,
      breakpoints: [1],
      handle:true,
      backdropDismiss: false
    });
    modal.present();
  }
}
