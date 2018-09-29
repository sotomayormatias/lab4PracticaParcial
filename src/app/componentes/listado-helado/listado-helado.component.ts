import { Component, OnInit } from '@angular/core';
import { ServicioHeladoService } from "../../servicios/servicio-helado.service";

@Component({
  selector: 'app-listado-helado',
  templateUrl: './listado-helado.component.html',
  styleUrls: ['./listado-helado.component.css']
})
export class ListadoHeladoComponent implements OnInit {

  miServicio: ServicioHeladoService;
  listado: any;

  constructor(serviceHelado: ServicioHeladoService) {
    this.miServicio = serviceHelado;
    this.traerTodos();
  }

  traerTodos() {
    this.miServicio.traerTodos('helado/').then(data => {
      console.info("helados listado",(data));
      this.listado = data;
    })
  }

  ngOnInit() {
  }

}
