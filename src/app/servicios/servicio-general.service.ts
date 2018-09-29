import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicioGeneralService {

  api: string = "http://localhost/labo4/api_rest/";
  constructor(public http: Http) { }

  public httpGetP(url: string) {
    return this.http
      .get(this.api + url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleError);
  }

  public httpPostP(url: string, objeto: any) {
    return this.http
      .get(url)
      .subscribe(data => {
        console.log(data);
        return data;
      });
  }

  public httpGetO(url: string): Observable<Response> {
    return this.http.get(this.api + url)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  public httpPostO(url: string, objeto): Observable<Response> {
    return this.http.post(this.api + url, objeto)
      .map((res: Response) => res.json())
      .catch((err: any) => Observable.throw(err.json().error || 'Server error'));
  }

  private extractData(res: Response) {
    return res.json() || {};
  }

  private handleError(error: Response | any) {
    return error;
  }


}
