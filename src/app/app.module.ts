import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { ServicioGeneralService } from './servicios/servicio-general.service';
import { ServicioHeladoService } from './servicios/servicio-helado.service';

import { AppComponent } from './app.component';
import { ListadoHeladoComponent } from './componentes/listado-helado/listado-helado.component';
import { BotonComponent } from './componentes/boton/boton.component';
import { AltaHeladoComponent } from './componentes/alta-helado/alta-helado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListadoHeladoComponent,
    BotonComponent,
    AltaHeladoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [ServicioGeneralService, ServicioHeladoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
