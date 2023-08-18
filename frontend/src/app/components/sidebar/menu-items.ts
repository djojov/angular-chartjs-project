import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faAddressBook,
  faCalendar,
  faFileLines,
  faMap,
  faPaperPlane,
  faRectangleList,
  faSmile,
} from '@fortawesome/free-regular-svg-icons';

export class MenuItem {
  id!: string;
  title!: string;
  route!: string;
  iconSource!: IconDefinition;
}

export const menuItems: MenuItem[] = [
  {
    id: '1',
    title: 'Home',
    iconSource: faMap,
    route: '',
  },
  {
    id: '2',
    title: 'Configuration',
    iconSource: faRectangleList,
    route: '/configuration',
  },
  {
    id: '3',
    title: 'Users',
    iconSource: faAddressBook,
    route: '/users',
  },
  {
    id: '4',
    title: 'Projects',
    iconSource: faPaperPlane,
    route: '/projects',
  },
  {
    id: '5',
    title: 'Vacations',
    iconSource: faCalendar,
    route: '/vacations',
  },
  {
    id: '6',
    title: 'Benefits',
    iconSource: faSmile,
    route: '/benefits',
  },
  {
    id: '7',
    title: 'Reports',
    iconSource: faFileLines,
    route: '/reports',
  },
];
