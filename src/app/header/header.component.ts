import { Component } from '@angular/core';
import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'my-header',
	templateUrl : './header.component.html'
})

export class headerComponent {
	containerHeight = window.screen.height+"px";

	constructor(private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
	}
}
