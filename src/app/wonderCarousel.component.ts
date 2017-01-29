import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';

import {WonderService} from './shared/wonder.service';

import {WondersInterface} from './wonderCarousel.interface';

@Component({
  selector: 'wonders-carousel',
  template: require('./wonderCarousel.component.html'),
  styles: [ String(require('./wonderCarousel.component.scss')) ]
})

export class WonderCarousalComponent implements OnInit {
	selectedWonder = {};
	errorMessage: string;
	wonders: any;
	@Output() newWonderValue = new EventEmitter(); //To connect to toggleWonder()


	constructor(private _wonderService: WonderService){}

	ngOnInit(): void{
		console.log("OnInit");
		this._wonderService.getWonders()
			.subscribe(
				wonders => this.wonders = wonders,
				error => this.errorMessage = <any>error
			);
		console.log(this.wonders);
	}

	closeWonder(){
		// Check for selected properties
		if(this.selectedWonder['id'] >= 0){
			this.newWonderValue.emit({
				value: this.selectedWonder['id']
			})
		}
	}


	selectWonder(id, name){
		this.selectedWonder['id'] = id;
		this.selectedWonder['name'] = name;
	}

}

