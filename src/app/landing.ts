import {Component} from '@angular/core';

@Component({
  selector: 'wonders-landing',
  template: require('./landing.html'),
  styles: [ String(require('./landing.scss')) ]
})

export class LandingComponent {
	headerHeight: number = 40;
	showWonder: boolean = false;


	public wHeight:number = (window.innerHeight - this.headerHeight);

	constructor(){
		
	}
	
	onResize(e){
		// Adjust height on resize
		this.wHeight = (e.target.innerHeight - this.headerHeight);
	}
	onSubmit(e){
		e.preventDefault();
		console.log(e);
	}

	toggleWonders(){
		this.showWonder = !this.showWonder;
		console.log(this.showWonder);
	}
}
