import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ngOnInit(): void {

    $(() =>  {

      function adjustFooter() {
          var footer = $("footer");

          if ($(document).height() > $(window).height()) {
              footer.css("position", "inherit");
          } else {
              footer.css({"position": "absolute", "bottom": "0"});
          }
      }

      window.addEventListener('resize',function() {
          adjustFooter();
      });

      adjustFooter();

  });

    const select = (el, all = false) => {
      el = el.trim()
      if (all) {
        return document.querySelectorAll(el)
      } else {
        return document.querySelector(el)
      }
    }

  /**
   * Preloader
   */
   let preloader = select('#preloader')
   if (preloader) {
     window.addEventListener('load', () => {
       preloader.remove()
     })
   }
  }
}
