import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss'],
})
export class CalendarComponent {
  calendarEvents = [
    { title: 'Test event 1', date: '2023-08-23' },
    { title: 'Test event 2', date: '2023-08-14' },
  ];

  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    plugins: [dayGridPlugin, interactionPlugin],
    events: this.calendarEvents,
    weekends: false,
    editable: true,
    eventColor: '#2c2f32',
    firstDay: 1,
  };

  toggleWeekends() {
    this.calendarOptions.weekends = !this.calendarOptions.weekends;
  }

  addEvent() {
    const dateStr = prompt('Enter a date in YYYY-MM-DD format')!;
    const dateName = prompt('Enter a name for the event')!;

    this.calendarEvents.push({
      title: dateName,
      date: dateStr,
    });

    console.log(this.calendarEvents);
  }
}
