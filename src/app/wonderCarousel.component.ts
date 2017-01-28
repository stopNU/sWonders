import {Component, Input, Output, EventEmitter} from '@angular/core';

import {WondersInterface} from './wonderCarousel.interface';

@Component({
  selector: 'wonders-carousel',
  template: require('./wonderCarousel.component.html'),
  styles: [ String(require('./wonderCarousel.component.scss')) ]
})

export class WonderCarousalComponent {
	selectedWonder = {};
	@Input() showWonder;
	@Output() newWonderValue = new EventEmitter(); //To connect to toggleWonder()

	closeWonder(){
		// Check for selected properties
		if(this.selectedWonder["id"] >= 0){
			this.newWonderValue.emit({
				value: this.showWonder // Sending back same value, must be easier way to do - Service?
			})
		}
	}

	//images data to be bound to the template
	public wonders = WONDERS;

	selectWonder(id, name){
		this.selectedWonder["id"] = id;
		this.selectedWonder["name"] = name;
	}

}

//IMAGES array implementing Image interface
var WONDERS: WondersInterface[] = [
  { "id": 0, "title": "We are covered", "url": "/assets/image-slider2.jpg" },
  { "id": 1, "title": "We are covered2", "url": "/assets/image-slider2.jpg" },
  { "id": 2, "title": "We are covered3", "url": "/assets/image-slider2.jpg" },
  { "id": 3, "title": "We are covered4", "url": "/assets/image-slider2.jpg" },
  { "id": 4, "title": "We are covered5", "url": "/assets/image-slider2.jpg" }
];
