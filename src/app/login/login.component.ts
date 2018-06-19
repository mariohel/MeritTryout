import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../common/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  errorMessage: string;
  constructor(public userService: UserService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get formData() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.errorMessage = null;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    this.loading = true;
    this.userService.login(this.formData.username.value, this.formData.password.value)
    .subscribe((data: any) => {
        if(data.success){
          this.userService.isLogged = true;
          this.userService.currentUser = data.user;
          this.router.navigateByUrl('/account');
        } else {
          this.errorMessage = data.message;
          this.loading = false;
          console.log(data.message);          
        }               
      },
      error => {
        this.errorMessage = error.message;
        this.loading = false;
        console.error(error);       
      });
  }

}
