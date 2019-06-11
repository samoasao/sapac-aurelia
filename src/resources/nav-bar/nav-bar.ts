import {EventAggregator} from 'aurelia-event-aggregator';
import {inject} from 'aurelia-framework';

@inject(EventAggregator)
export class NavBar {
  activePage : string

  constructor(ea: EventAggregator) {
    ea.subscribe('router:navigation:success', (router) => {
      console.log(router);
      this.activePage = router.instruction.config.name;
    });
  }

}


