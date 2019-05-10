import {RouterConfiguration, Router} from 'aurelia-router'
import {PLATFORM} from 'aurelia-framework'

export class App {

  router: Router;

  configureRouter(config : RouterConfiguration, router: Router){
    this.router = router;
    config.title = 'S.A.P.A.C. Home';
    config.map([
      { route: ['', 'home'], name: 'home', moduleId: PLATFORM.moduleName('home/home.html'), nav: true},
      { route: 'about', name: 'about', moduleId: PLATFORM.moduleName('about/about.html'), nav: true}

    ]);
  }

}
