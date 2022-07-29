import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

   document.getElementById ("footer").style.display = "none";
   document.querySelector("nav").style.display = "none";

   document.querySelector("body").style.cssText ="display: flex; justify-content: center; align-items: center; background-color: rgba(79, 79, 79, 0.037);"

  }

}
