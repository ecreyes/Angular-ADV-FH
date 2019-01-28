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
    }
  }

}

interface Ajustes{
  temaUrl:string,
  tema:string
}