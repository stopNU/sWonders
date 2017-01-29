import { Injectable } from '@angular/core';
import { WondersInterface } from '../wonderCarousel.interface';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';



@Injectable()
export class WonderService {
  private _url = 'api/wonders/';
  constructor(private _http: Http){}

  getWonders(): Observable<Response> {
  	console.log("getWonders called");
    return this._http.get(this._url + 'wonders.json')
    	.map((response: Response) => response.json())
      .do(data => console.log(JSON.stringify(data)))
    	.catch(this.handleError);
    
  
  }

  private handleError(error: Response){
  	return Observable.throw(error.json().error || 'Server Error');
  }
}