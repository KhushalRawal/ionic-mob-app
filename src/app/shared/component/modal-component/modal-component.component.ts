import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { UiService } from 'src/app/core/services/ui.service';
import { BaseComponent } from '../base/base-component';


@Component({
  selector: 'app-modal-component',
  templateUrl: './modal-component.component.html',
  styleUrls: ['./modal-component.component.scss'],
  standalone:true,
  imports:[IonicModule, CommonModule]
})
export class ModalComponentComponent extends BaseComponent implements OnInit {
  @Input() data: any;
  label = '';

  constructor(private uiService:UiService) {
    super();
  }

  ngOnInit():void {
    this.subs.add(()=>{})
  }

  cancel(){
    this.uiService.dismissModal()
  }
}
