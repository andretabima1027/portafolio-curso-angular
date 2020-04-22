import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/infoPagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {};
  equipo: any[] = [];
  cargada = false;

  constructor( private http: HttpClient) {

    // this.cargarInfo();
    this.cargarEquipo();
   }

  private cargarInfo(){
    // Leer el archivo json
    this.http.get('assets/data/data-pagina.json')
        .subscribe( (resp: InfoPagina) => {
          this.cargada = true;
          this.info = resp;
          // console.log(resp);
        });
  }

  private cargarEquipo(){
    this.http.get('https://angular-html-94e7f.firebaseio.com/equipo.json')
        .subscribe( (resp: any [] ) => {
          this.equipo = resp;
         // console.log(this.equipo);
        });
  }
}
