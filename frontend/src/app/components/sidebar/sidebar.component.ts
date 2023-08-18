import { Component, OnInit } from '@angular/core';
import { MenuItem, menuItems } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[];

  ngOnInit(): void {
    this.menuItems = menuItems;
  }
}
