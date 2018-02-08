import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'my-navbar',
	templateUrl: './navbar.component.html'
})

export class navbarComponent {
	constructor(private globalObj: globalVariables,private router:Router){
		
	}
	showSignupModal(){
		this.globalObj.isSignup = true;
		this.globalObj.isLogin = false;
	}
	showLoginModal(){
		this.globalObj.isLogin = true;
		this.globalObj.isSignup = false;
	}
	logoutUser(){
		this.globalObj.isLogin = true;
		this.globalObj.isSignup = false;
		this.globalObj.isUserLogin = false;	

		this.router.navigate(['/']);
	}
}