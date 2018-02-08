import { Injectable } from '@angular/core';
import { userSign } from './../models/userSign';

@Injectable()

export class usersService {
	users:userSign[]=[{
		fullname: 'Bikram Choudhury',
		email: 'bikram',
		password: 'bikram'
	}];
	userExist:userSign = null;
	constructor(){

	}

	getAllUsers():userSign[]{
		return this.users;
	}
	getUser(email:string){
		return this.users.filter(obj=>obj.email===email);
	}
	saveUser(user:userSign){
		if(user && Object.keys(user).length > 0){
			this.users.push(user);
		}
	}
	checkUser(user:userSign):userSign{
		if(user && Object.keys(user).length > 0){
			// this.users.find(obj=>)
			var thiss = this;
			thiss.users.forEach(function(obj){
				if(obj.email===user.email && obj.password===user.password){
					thiss.userExist = obj;
					return;
				}
			});
		}
		return this.userExist;
	}
}