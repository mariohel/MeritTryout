import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title = 'Merit Tryout';
  constructor(public userService: UserService) {}

  ngOnInit() {
  }  
}
