import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

import { userLookup } from './../models/userLookup';
import { lookupUsers } from './../service/lookupUsers';
import { globalVariables } from './../service/globalVariables.service';

import * as _ from 'underscore';

@Component({
	selector : 'add-user',
	templateUrl: './user.component.html'
})

export class userComponent {
	@ViewChild('userIdInput') userId:ElementRef;

	user:userLookup = {
						name : "",
						age : 0,
						phone : 0,
						email : "",
						dob : new Date(),
						service : "",
						designation : "",
						star : 0
					};
	transientUsers:userLookup[];
	isEdit = false;
	constructor(private lookup:lookupUsers,private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
		this.updateTransientUser();
	}
	ngAfterViewInit(){
		// console.log(this.userId.nativeElement.value);
	}
	saveUser(){
		var user = this.user;
		user.isActive = true;
		user.createdAt = new Date();
		
		this.lookup.saveUsers(user)
		.subscribe(this.handelSaveResponse.bind(this));
		
		this.updateTransientUser();
	}
	updateTransientUser(){
		this.lookup.getUsersFromServer()
		.subscribe(res=>this.transientUsers = res);
	}
	private handelSaveResponse(res:boolean){
		if(res){
			alert('User Saved successfully');
			this.updateTransientUser();
			this.resetUser();
		}
		else{
			alert('Error')
		}
		
	}
	resetUser(){
		this.user = {
						name : "",
						age : 0,
						phone : 0,
						email : "",
						dob : new Date(),
						service : "",
						designation : "",
						star : 0
					};
	}
	editUser(userId:string){
		if(userId && userId.length){
			this.lookup.getLookupUserById(userId)
			.subscribe(this.handelEditResponse.bind(this));
		}
	}
	private handelEditResponse(response:userLookup){
		if(response){
			if(response.dob){
				var dob = new Date(response.dob),
					formatedDate = dob.getDate()+"/"+(dob.getMonth()+1)+"/"+dob.getFullYear();
				// response['dob'] = formatedDate;
			}
			this.user = response;
			this.userId.nativeElement.value = response._id;
			this.isEdit = true;
		}
	}
	updateUser(){
		var user = this.user,
			userId = this.userId.nativeElement.value;
		user.updatedAt = new Date();

		this.lookup.updateUser(user,userId)
		.subscribe(this.handelUpdateResponse.bind(this));
	}
	private handelUpdateResponse(response:userLookup){
		if(response){
			var tempUser = _.findWhere(this.transientUsers,{_id:response._id});
			_.extend(tempUser,response);
			this.resetUser();
			this.userId.nativeElement.value = '';
			alert("Update Successfull");
		}
		else{
			alert("Error");
		}
	}
	deleteUser(userId:string){
		if(userId && userId.length){
			this.lookup.deleteUser(userId)
			.subscribe(this.handelDeleteResponse.bind(this));
		}
	}
	private handelDeleteResponse(res:string){
		if(res){
			this.transientUsers = _.without(this.transientUsers,_.findWhere(this.transientUsers,{_id: res}));
			alert("Delete Record Successfully");
		}
		else{
			alert("Error");
		}
	}

}