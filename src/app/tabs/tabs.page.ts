import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector, OnInit, ViewChild, inject } from '@angular/core';
import { IonTabs, IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule],
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);
  tabs = [
    { path: 'tab1', name: 'Home', icon:'home-outline', svgPath: ''},
    { path: 'tab2', name: 'Books', icon:'book-outline', svgPath: ''},
    { path: 'tab3', name: 'Settings', icon:'settings-outline', svgPath: ''},
  ];

  constructor() {}

  ngOnInit(): void {
    this.tabs
  }
}
