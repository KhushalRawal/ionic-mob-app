import { Component } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UiService } from '../core/services/ui.service';
import { ModalComponentComponent } from '../shared/modal-component/modal-component.component';

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

  open(){
    this.uiService.presentModal({
      component:ModalComponentComponent,
      componentProps:{
        label:'Test'
      }
    })
  }
}
