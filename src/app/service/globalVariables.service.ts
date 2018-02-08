import { Injectable } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

@Injectable()

export class globalVariables{
	currentUrl:any='';
	isUserLogin:boolean = false;
	isLogin:boolean = false;
	isSignup:boolean = false;
	pricingPlan:any[] = [{
		key: '1',
		name: '1 month membership ($150)'
	},{
		key: '2',
		name: '3 month membership ($350)'
	},{
		key: '3',
		name: '1 year membership ($1000)'
	},{
		key: '4',
		name: 'Free trial class'
	}];
	temporaryVariable:any[]=[];

	constructor(private router: Router,private activeRoute:ActivatedRoute){
		
	}
	updateCurrentUrl():any{
		this.currentUrl = this.router.url;
	}
	getLoginStatus():boolean{
		return this.isLogin;
	}
	getPricingPlan():any[]{
		return this.pricingPlan;
	}
	/*getTempVariables():any[]{
		return this.temporaryVariable;
	}*/
}