import {RouterConfiguration, Router} from 'aurelia-router'
import {PLATFORM} from 'aurelia-framework'

export class App {

  router: Router;

  configureRouter(config : RouterConfiguration, router: Router){
    this.router = router;
    config.title = 'S.A.P.A.C. Home';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('pages/home/home.html'), nav: true},
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('pages/about/about.html'), nav: true},
      { route: 'auditions', name: 'shows', moduleId: PLATFORM.moduleName('pages/auditions/auditions.html'), nav: true},
      { route: 'board', name: 'about', moduleId: PLATFORM.moduleName('pages/board/board.html'), nav: true},
      { route: 'donate', name: 'about', moduleId: PLATFORM.moduleName('pages/donate/donate.html'), nav: true},
      { route: 'support', name: 'support', moduleId: PLATFORM.moduleName('pages/support/support-individual.html'), nav: true},
      { route: 'support-corporate', name: 'support', moduleId: PLATFORM.moduleName('pages/support/support-corporate.html'), nav: true},
      { route: 'tickets', name: 'shows', moduleId: PLATFORM.moduleName('pages/tickets/tickets.html'), nav: true},
      { route: 'contact', name: 'about', moduleId: PLATFORM.moduleName('pages/contact/contact.html'), nav: true},
      { route: 'past-shows', name: 'past-shows', moduleId: PLATFORM.moduleName('pages/past-shows/past-shows.html'), nav: true}
    ]);
  }

}
