import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  anio: number = new Date().getFullYear();
  facebook: string;
  instagram: string;
  twitter: string;
  autorPage: string;
  email: string;

  // tslint:disable-next-line: variable-name
  constructor( public _service: InfoPaginaService) {
    this.facebook = _service.info.facebook;
    this.instagram = _service.info.Instagra;
    this.twitter = _service.info.twitter;
    this.autorPage = _service.info["pagina-autor"];
    this.email = _service.info.email;
   }

  ngOnInit(): void {
  }

}
