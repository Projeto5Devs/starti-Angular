
import { Observable } from 'rxjs';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { Usuario } from 'src/app/user/usuario';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user$: Observable<Usuario>
  public responsiveLayout = false
  roles: string[]

  constructor(private userService:UserService, private router: Router, public nav: NavbarService) {
    this.user$ = userService.retornaUsuario()
    this.roles = userService.getRoles()
  }

  logout(){
    this.userService.logout();
    this.router.navigate([''])
  }


  linkPerfil(roles: []){
    console.log(roles)
    for(let i in roles){
      if(roles[i] === 'ROLE_USER_PF'){
        this.router.navigate(['/candidato']);
      }
      if(roles[i] === 'ROLE_ADMIN'){
        this.router.navigate(['/']);
      }
    }

  }

  ngOnInit() {
    window.onresize = () => this.responsiveLayout = window.innerWidth <= 991;
  }


}
