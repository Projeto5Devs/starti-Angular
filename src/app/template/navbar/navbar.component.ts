
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Usuario } from 'src/app/user/usuario';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user$: Observable<Usuario>
  public responsiveLayout = false

  constructor(private userService:UserService, private router: Router) {
    this.user$ = userService.retornaUsuario()
  }

  logout(){
    this.userService.logout();
    this.router.navigate([''])
  }

  ngOnInit() {
    window.onresize = () => this.responsiveLayout = window.innerWidth <= 991;
  }


}
