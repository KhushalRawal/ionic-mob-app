import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UiService } from 'src/app/core/services/ui.service';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
  standalone:true,
  imports:[IonicModule, CommonModule]
})
export class ModalComponentComponent  implements OnInit {

  constructor(private uiService:UiService) { }

  ngOnInit():void {}

  cancel(){
    this.uiService.dismissModal()
  }
}
