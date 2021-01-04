import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  };
  erreur = true;

  constructor(private authService: AuthService, private router: Router) 
  {
    this.user.email='';
    this.user.password='';
  }

/*
  signInWithTwitter() {
    this.authService.signInWithTwitter()
      .then((res) => { 
          this.router.navigate(['dashboard'])
        })
      .catch((err) => console.log(err));
  }
*/
  signInWithFacebook() {
    this.authService.signInWithFacebook()
    .then((res) => { 
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGoogle() {
    this.authService.signInWithGoogle()
    .then((res) => {
        this.router.navigate(['dashboard'])
      })
    .catch((err) => console.log(err));
  }

  signInWithGithub() {
    this.authService.signInWithGithub()
         .then((res) => {
            this.router.navigate(['dashboard'])
         })
         .catch((err) => console.log(err));
    }

  signUp() {
    this.authService.signUpWithEmail(this.user.email, this.user.password).then((res) => {
      console.log(res);
      //this.router.navigate(['dashboard']);
    })
    .catch((err) => console.log('error: ' + err));
  }

  
  signInWithEmail() {
    this.authService.signInRegular(this.user.email, this.user.password)
    .then((res) => {
      console.log(res);
      this.router.navigate(['dashboard']);
    })
    .catch((err) => console.log('error: ' + err));
    console.log(this.user);
  }
/*
  isAuthenticated() {

    if (this.authService.isLoggedIn()) {
      sessionStorage.setItem('isConnected', 'true');
      console.log(localStorage.getItem('isConnected'));
      this.router.navigateByUrl('/dashboard');
    } else {
      this.erreur = false;
    }
  }
*/
  ngOnInit() {}

}