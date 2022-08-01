import { Component , OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  ngOnInit(): void {



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
