import { Component } from '@angular/core';
import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'my-section',
	templateUrl : './section.component.html'
})

export class sectionComponent {
	constructor(private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
	}
}