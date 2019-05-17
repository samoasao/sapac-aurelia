import {RouterConfiguration, Router} from 'aurelia-router'
import {PLATFORM} from 'aurelia-framework'

export class App {

  router: Router;

  configureRouter(config : RouterConfiguration, router: Router){
    this.router = router;
    config.title = 'S.A.P.A.C. Home';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home/home.html'), nav: true},
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('about/about.html'), nav: true},
      { route: 'auditions', name: 'auditions', moduleId: PLATFORM.moduleName('auditions/auditions.html'), nav: true},
      { route: 'board', name: 'board', moduleId: PLATFORM.moduleName('board/board.html'), nav: true},
      { route: 'donate', name: 'donate', moduleId: PLATFORM.moduleName('donate/donate.html'), nav: true},
      { route: 'joinus', name: 'joinus', moduleId: PLATFORM.moduleName('joinus/joinus.html'), nav: true}
    ]);
  }

}
