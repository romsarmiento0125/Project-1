import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  user = new User();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  register(user: User) {
    console.log(user);
    this.authService.register(user).subscribe();
  }

}
