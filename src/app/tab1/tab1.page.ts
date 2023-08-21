import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UiService } from '../core/services/ui.service';
import { ModalComponentComponent } from '../shared/component/modal-component/modal-component.component';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class Tab1Page {
  message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor(private uiService:UiService) {}

  open(){
    this.uiService.presentModal({
      component: ModalComponentComponent,
      componentProps:{
        label:'Test'
      }
    })
  }

}
