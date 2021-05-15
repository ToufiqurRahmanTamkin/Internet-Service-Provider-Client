import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faCaretRight, faMapMarkerAlt, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

export const contactInfo = [
   {
      id: 1,
      icon: faMapMarkerAlt,
      name: 'Banani, Dhaka - 1260',
      className: 'contact-item',
   },
   {
      id: 2,
      icon: faEnvelope,
      name: 'tamkin22rahman@gmail.com',
      className: 'contact-item',
   },
   {
      id: 3,
      icon: faMobileAlt,
      name: '+8801787721193',
      className: 'contact-item',
   },
];

export const socialInfo = [
   {
      id: 1,
      icon: faFacebookF,
      link: 'https://www.facebook.com/',
      className: 'social-item',
   },
   {
      id: 2,
      icon: faInstagram,
      link: 'https://www.instagram.com/',
      className: 'social-item',
   },
   {
      id: 3,
      icon: faTwitter,
      link: 'https://twitter.com/',
      className: 'social-item',
   },
];

export const services = [
   {
      id: 1,
      name: 'Customer Services',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/customerServices',
   },
   {
      id: 2,
      name: 'Get Services',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/getService',
   },
   {
      id: 3,
      name: 'Repair Connection',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/repairConnection',
   },
   {
      id: 4,
      name: 'Repair Bandwidth',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/repairBandwidth',
   },
   {
      id: 5,
      name: 'Complain',
      icon: faCaretRight,
      className: 'footer-link',
      link: '/complain',
   },
];

export const openingShop = [
   {
      id: 1,
      name: 'Friday',
      time: '03.00pm - 10.00pm',
      className: 'footer-item',
   },
   {
      id: 2,
      name: 'Saturday',
      time: '10.00am - 08.00pm',
      className: 'footer-item',
   },
   {
      id: 3,
      name: 'Sunday - Monday',
      time: '11.00am - 06.00pm',
      className: 'footer-item',
   },
   {
      id: 4,
      name: 'Tuesday - Thursday',
      time: '09.00am - 10.00pm',
      className: 'footer-item',
   },
   {
      id: 5,
      name: 'Saturday',
      time: '11.30am - 06.20pm',
      className: 'footer-item',
   },
];
