import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document,private settings:SettingsService) { 
    console.log(_document);
  }

  ngOnInit() {
  }

  cambiarColor(estilo:string,link:any){
    this.aplicarCheck(link);
    let miUrl = `assets/css/colors/${estilo}.css`
    this._document.getElementById('tema').setAttribute('href',miUrl);
    this.settings.ajustes.tema = estilo;
    this.settings.ajustes.temaUrl = miUrl;
    this.settings.guardarAjustes();
  }

  aplicarCheck(link:any){
    //obtengo todos los elementos html con la clase selector
    let selectores:any = document.getElementsByClassName('selector');
    //les remuevo la clase working a todos
    for(let ref of selectores){
      ref.classList.remove('working');
    }
    //al seleccionado se le añade la class working
    link.classList.add('working');
  }
}
