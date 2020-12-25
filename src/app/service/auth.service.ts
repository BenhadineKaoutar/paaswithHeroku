import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user: Observable<any>;

  constructor(private firebaseAuth: AngularFireAuth ,private router: Router) {
    this.user = firebaseAuth.authState;
  }
  
  /* First version => now this section is implemented inside Login component
  LOGIN: coco@ben.ma
  PASSWORD: coco2025
  signup(email: string, password: string) {
    this.firebaseAuth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Registration Success!', value);
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });    
  }

  login(email: string, password: string) {
    this.firebaseAuth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        console.log('Nice, it worked!');
      })
      .catch(err => {
        console.log('Something went wrong:',err.message);
      });
  }
  
  logout() {
    this.firebaseAuth
      .signOut();
  }
  */

  /*
 signInWithTwitter() {
  return this.firebaseAuth.signInWithPopup(
    new firebase.default.auth.TwitterAuthProvider()
  )
}
*/

signInWithGithub() {
  return this.firebaseAuth.signInWithPopup(
    new firebase.default.auth.GithubAuthProvider()
  )
}

signInWithFacebook() {
  return this.firebaseAuth.signInWithPopup(
    new firebase.default.auth.FacebookAuthProvider()
  )
}

signInWithGoogle() {
  return this.firebaseAuth.signInWithPopup(
    new firebase.default.auth.GoogleAuthProvider()
  )
}

signInRegular(email, password) {
    const credential = firebase.default.auth.EmailAuthProvider.credential( email, password );

    return this.firebaseAuth.signInWithEmailAndPassword(email, password)
  }

isLoggedIn() {
if (this.user == null ) {
    return false;
  } else {
    return true;
  }
}


logout() {
  this.firebaseAuth.signOut()
  .then((res) => this.router.navigate(['/']));
}

}