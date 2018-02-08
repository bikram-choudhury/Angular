import { Component } from '@angular/core';
import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'team-section',
	templateUrl : './teamSection.component.html'
})
export class teamSectionComponent{
	constructor(private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
	}
}