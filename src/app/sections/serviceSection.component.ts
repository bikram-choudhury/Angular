import { Component } from '@angular/core';
import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'service-section',
	templateUrl : './serviceSection.component.html'
})

export class serviceSectionComponent {
	constructor(private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
	}
}