
import { Directive,ElementRef, HostListener } from '@angular/core';

@Directive({
	selector : '[spacebarcontrol]'
})

export class spacebarDirective {
	constructor(private elem:ElementRef){
		
	}
	@HostListener('document:keypress',['$event']) function1(keyEve:KeyboardEvent){
		
		if(keyEve.keyCode == 32){
			if(this.elem.nativeElement.getAttribute("id") === 'video-1'){
				let video = this.elem.nativeElement;
				(video.paused)?video.play():video.pause();
			}
		}
		if(keyEve.keyCode == 13){
			if(this.elem.nativeElement.getAttribute("name") === 'name-2'){
				let video = this.elem.nativeElement;
				(video.paused)?video.play():video.pause();
			}
		}
	}
}