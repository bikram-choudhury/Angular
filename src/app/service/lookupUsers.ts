
import { Injectable } from '@angular/core';
import { userLookup } from './../models/userLookup';
import { Http,Response,RequestOptions,Headers} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

import * as _ from 'underscore';

@Injectable()

export class lookupUsers{
	users:userLookup[]=[];
	apiUrl:string="";
	constructor(private http:Http){
		this.apiUrl="http://localhost:4080/api/customers";
	}
	saveUsers(user:userLookup):Observable<boolean>{
		if(user && Object.keys(user).length >0){

			let header = new Headers({"content-type": "application/json"});
			let options = new RequestOptions({headers: header});
			
			return this.http.post(this.apiUrl,JSON.stringify(user),options)
					.map(response=>(response.status==200 && response.statusText=='OK')? true : false);
		}
	}
	getUsersFromServer():Observable<userLookup[]>{
		return this.http.get(this.apiUrl)
				.map(this.handelGetResponse.bind(this));
	}
	private handelGetResponse(response: Response){
		if(response.status==200 && response.statusText=='OK'){
			var data = response.json();
			_.map(data,function(obj){
				delete obj['__v'];
			})
			return <userLookup[]> data;
		}
		return <userLookup[]>[];
	}
	deleteUser(userId:string):Observable<string>{
		if (userId && userId.length) {
			return this.http.delete(this.apiUrl+"/"+userId)
					.map(this.handelDeleteResponse.bind(this));
					// .map(res=>res.status==200?true:false);
		}
	}
	private handelDeleteResponse(response:Response){
		var strRes = '';
		if(response.status==200 && response.statusText=='OK'){
			var resJson = response.json();
			strRes = resJson._id;
		}
		return strRes;
	}
	getLookupUserById(userId:string):Observable<userLookup>{
		if(userId && userId.length){
			return this.http.get(this.apiUrl+"/"+userId)
					.map(res=><userLookup>res.json());
		}
	}
	updateUser(user:userLookup,userId:string): Observable<userLookup>{
		let header = new Headers({'content-type' : 'application/json'}),
			options = new RequestOptions({headers : header});
		return this.http.put(this.apiUrl+"/"+userId,JSON.stringify(user),options)
				.map(this.handelUpdateResponse.bind(this));
	}
	private handelUpdateResponse(res:Response){
		console.log(res);
		if(res.status==200){
			var data = res.json();
			return <userLookup> data;
		}
	}
	getLookupUser(user:userLookup):userLookup{
		return this.users.filter(obj=>obj.email === user.email)[0];
	}
}