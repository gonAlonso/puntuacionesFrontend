import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit() {
  }

  logout(){
    this.authService.logout()
  }

  emailRegistrado(){
    const user = localStorage.getItem('currentUser')
    if(!user){
      return "No logeado"
    }
    return JSON.parse(user).email
  }
}
