import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';

import { globalVariables } from './service/globalVariables.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent  {
	constructor(private router:Router, private activeRoute:ActivatedRoute, private globalVar:globalVariables){
		console.log(this.router.url);
	}	
}
