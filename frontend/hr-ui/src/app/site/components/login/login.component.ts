import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'site-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private loginForm: FormGroup

  constructor(public authService: AuthService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.createLoginForm()
  }

  private createLoginForm() {
    return new FormGroup({
        email: new FormControl(),
        password: new FormControl()
    });
  }
  
  private onSubmit(){
    this.authService.login(this.loginForm.value.email, this.loginForm.value.password);
  }
}
