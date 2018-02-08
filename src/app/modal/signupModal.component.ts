import { Component } from '@angular/core';

import { globalVariables } from './../service/globalVariables.service';
import { usersService } from './../service/users.service';
import { userSign } from './../models/userSign';

@Component({
	selector : 'signup-modal',
	templateUrl : './signupModal.component.html'
})

export class signupModalComponent {
	
	fullname:string="";
	email:string="";
	password:string="";
	user:userSign;
	pricingPlan:any[]=[];

	constructor(private globalVar: globalVariables,private users:usersService){
		this.pricingPlan = this.globalVar.getPricingPlan();
		
		delete this.globalVar.temporaryVariable['plan'];
	}
	modalClose(event:any){
		console.log(event);
	}
	savePlan(event:any,item:any){
		this.globalVar.temporaryVariable['plan'] = item;
	}
	saveUser(){
		this.user = {
			'fullname' : this.fullname,
			'email' : this.email,
			'password' : this.password,
			'plan' : this.globalVar.temporaryVariable['plan']
		};
		this.users.saveUser(this.user);
		delete this.globalVar.temporaryVariable['plan'];

		this.globalVar.isSignup = false;
		this.globalVar.isLogin = true;
		this.user = null;
	}
	LoginUser(){
		this.user={
			'email' : this.email,
			'password' : this.password,
		};
		this.users.checkUser(this.user);
		if(Object.keys(this.user).length > 1){
			this.globalVar.isLogin = false;
			this.globalVar.isSignup = false;
			this.globalVar.isUserLogin = true;
		}
		// this.user = {};
	}
}