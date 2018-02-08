import { Component } from '@angular/core';
import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'desc-section',
	templateUrl : './descSection.component.html'
})

export class descSectionComponent {
	constructor(private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
	}
}