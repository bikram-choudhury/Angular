import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

import { globalVariables } from './../service/globalVariables.service';

@Injectable()

export class userAuthenticatedGuard implements CanActivate{
	constructor(private globalVars:globalVariables){

	}
	canActivate(){
		return this.globalVars.isUserLogin;
	}
}