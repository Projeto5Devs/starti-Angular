import { Usuario } from './../../service/user/usuario';
import { Observable } from 'rxjs';
import { UserService } from './../../service/user/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
