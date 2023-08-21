import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faMap } from '@fortawesome/free-regular-svg-icons';
import {
  faChartArea,
  faChartLine,
  faChartPie,
  faChartSimple,
  faWandMagicSparkles,
} from '@fortawesome/free-solid-svg-icons';

export class MenuItem {
  id!: string;
  title!: string;
  route!: string;
  iconSource!: IconDefinition;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    title: 'Dashboard',
    iconSource: faMap,
    route: '',
  },
  {
    id: '2',
    title: 'Bar Charts',
    iconSource: faChartSimple,
    route: '/bar-charts',
  },
  {
    id: '3',
    title: 'Line Charts',
    iconSource: faChartLine,
    route: '/line-charts',
  },
  {
    id: '4',
    title: 'Bubble Charts',
    iconSource: faChartArea,
    route: '/bubble-charts',
  },
  {
    id: '5',
    title: 'Pie Charts',
    iconSource: faChartPie,
    route: '/pie-charts',
  },
  {
    id: '6',
    title: 'Generator',
    iconSource: faWandMagicSparkles,
    route: '/generator',
  },
  {
    id: '7',
    title: 'Calendar',
    iconSource: faCalendar,
    route: '/calendar',
  },
];
