import { Component } from '@angular/core';
import { faBell, faMessage } from '@fortawesome/free-regular-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  faBell = faBell;
  faMessage = faMessage;
  faPlus = faPlus;

  isAdmin = true;
  // faPlus: faPlus;
}
