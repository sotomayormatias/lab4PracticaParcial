import { Component, OnInit } from '@angular/core';
import { ServicioHeladoService } from "../../servicios/servicio-helado.service";

@Component({
  selector: 'app-alta-helado',
  templateUrl: './alta-helado.component.html',
  styleUrls: ['./alta-helado.component.css']
})
export class AltaHeladoComponent implements OnInit {

  miServicio: ServicioHeladoService;
  helado: { sabor: string, tipo: string, kilos: number } = {
    sabor : "",
    tipo : "",
    kilos : 0
  };

  constructor(serviceHelado: ServicioHeladoService) {
    this.miServicio = serviceHelado;
  }

  ngOnInit() {
  }

  guardarHelado(){
    this.miServicio.guardar("helado/", this.helado).then(data => {
      console.log(data);
    });
  }

}
