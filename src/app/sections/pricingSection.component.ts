import { Component } from '@angular/core';
import { globalVariables } from './../service/globalVariables.service';

@Component({
	selector : 'pricing-section',
	templateUrl: './pricingSection.component.html'
})

export class pricingSectionComponent{
	constructor(private globalVar:globalVariables){
		this.globalVar.updateCurrentUrl();
	}
}