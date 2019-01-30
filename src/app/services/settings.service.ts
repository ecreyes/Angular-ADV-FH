import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  ajustes:Ajustes = {
    temaUrl:"assets/css/colors/purple-dark.css",
    tema:"purple-dark"
  };

  constructor(@Inject(DOCUMENT) private _document) { }

  guardarAjustes(){
    localStorage.setItem('ajustes',JSON.stringify(this.ajustes));
  }

  cargarAjustes(){
    if(localStorage.getItem('ajustes')){
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      this.aplicarTema(this.ajustes.tema);
    }
  }

  aplicarTema(estilo:string){
    let miUrl = `assets/css/colors/${estilo}.css`
    this._document.getElementById('tema').setAttribute('href',miUrl);
    this.ajustes.tema = estilo;
    this.ajustes.temaUrl = miUrl;
    this.guardarAjustes();

  }

}

interface Ajustes{
  temaUrl:string,
  tema:string
}