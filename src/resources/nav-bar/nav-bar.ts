import { EventAggregator } from 'aurelia-event-aggregator';
import { inject } from 'aurelia-framework';

@inject(EventAggregator)
export class NavBar {
  activePage: string
  anchor: string

  attached() {

    let links = document.getElementsByClassName("show_link");
    for (let i = 0; i < links.length; i++) {
      links[i].addEventListener("click", (e) => {
        let name = e.target["name"];
        this.anchor = name;

        let el = document.getElementById(this.anchor);
        if (el) {
          el.scrollIntoView();
          this.anchor = '';
        }
      })
    }

  }

  constructor(ea: EventAggregator) {
    ea.subscribe('router:navigation:success', (router) => {
      this.activePage = router.instruction.config.name;
    });

    ea.subscribe('router:navigation:complete', (router) => {
      if (this.anchor && document.getElementById(this.anchor)) {
        document.getElementById(this.anchor).scrollIntoView();
      }

      if (router.instruction.config.route === 'tickets') {
        window['showtixWidget'].loadEvents(17593, 39623);
      }

    });
  }

}


