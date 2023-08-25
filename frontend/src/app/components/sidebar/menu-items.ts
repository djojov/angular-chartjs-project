import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faMap } from '@fortawesome/free-regular-svg-icons';
import { faChartArea, faChartLine, faFlaskVial, faWandMagicSparkles } from '@fortawesome/free-solid-svg-icons';

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
    route: '/home',
  },
  {
    id: '2',
    title: 'Blood Pressure',
    iconSource: faChartLine,
    route: '/blood-pressure',
  },
  {
    id: '3',
    title: 'Fluid Volume',
    iconSource: faFlaskVial,
    route: '/fluid-volume',
  },
  {
    id: '4',
    title: 'Impedance Data',
    iconSource: faChartArea,
    route: '/impedance',
  },
  {
    id: '5',
    title: 'Generator',
    iconSource: faWandMagicSparkles,
    route: '/generator',
  },
  {
    id: '6',
    title: 'Calendar',
    iconSource: faCalendar,
    route: '/calendar',
  },
];
