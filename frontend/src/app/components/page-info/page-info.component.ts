import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-page-info',
  templateUrl: './page-info.component.html',
  styleUrls: ['./page-info.component.scss'],
})
export class PageInfoComponent {
  @Input() pageName = '';

  myMoment: moment.Moment = moment(new Date());
  currentDateTime = this.myMoment.format('lll');
}
