import { Component, OnInit, Input } from '@angular/core';
import { ServicioHeladoService } from "../../servicios/servicio-helado.service";

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.css']
})
export class BotonComponent implements OnInit {

  miServicio: ServicioHeladoService;
  @Input() id: number;

  constructor(serviceHelado: ServicioHeladoService) {
    this.miServicio = serviceHelado;
   }

  ngOnInit() {
  }

  borrarHelado(){
    console.log(this.id);
  }
}
