import {Component} from '@angular/core';

@Component({
  selector: 'wonders-landing',
  template: require('./landing.html')
})

export class LandingComponent {
	headerHeight: number = 60;
	public wHeight:number = (window.innerHeight - this.headerHeight);

	constructor(){
		
	}
	
	onResize(e){
		// Adjust height on resize
		this.wHeight = (e.target.innerHeight - this.headerHeight);
	}
}
