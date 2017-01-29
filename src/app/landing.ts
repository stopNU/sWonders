import {Component} from '@angular/core';

@Component({
  selector: 'wonders-landing',
  template: require('./landing.html'),
  styles: [ String(require('./landing.scss')) ]
})

export class LandingComponent {
	headerHeight: number = 40;
	showWonder: boolean = false;
	chosenWonder: number;


	public wHeight:number = (window.innerHeight - this.headerHeight);

	constructor(){
		
	}
	
	onResize(e){
		// Adjust height on resize
		this.wHeight = (e.target.innerHeight - this.headerHeight);
	}
	onSubmit(e){
		console.log("Submitted: " + e.target[0].value);
		console.log("Submitted: " + e.target[1].value);
		//e.preventDefault();
	}

	wonderReturned(wonderId){
		console.log(wonderId);
		this.chosenWonder = wonderId;
		this.toggleWonders();		
	}

	toggleWonders(){
		this.showWonder = !this.showWonder;
		console.log(this.showWonder);
	}
}
