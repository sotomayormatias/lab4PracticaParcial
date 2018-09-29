import { Injectable } from '@angular/core';
import { ServicioGeneralService } from './servicio-general.service';

@Injectable()
export class ServicioHeladoService {

  constructor(public miHttp: ServicioGeneralService) { }

  public traerTodos(ruta) {
    return this.miHttp.httpGetO(ruta)
      .toPromise()
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  }

  public guardar(ruta, objeto:any) {
    return this.miHttp.httpPostO(ruta, objeto)
      .toPromise()
      .then(data => {
        return data;
      }, err => {
        console.log(err);
      })
  }
}
