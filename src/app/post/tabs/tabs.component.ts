import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Input() tabsArray: string [] = [];
  @Output() onTabCharge = new EventEmitter();
  activeTab : number = 0;

  constructor() {}

  ngOnInit(): void {
    
  }

  setTab(index: number){
    this.activeTab = index;
    this.onTabCharge.emit(this.activeTab);
  }
}
