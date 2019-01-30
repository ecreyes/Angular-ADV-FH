import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(private settings:SettingsService) { 
  }

  ngOnInit() {
    this.colocarCheck();
  }

  cambiarColor(estilo:string,link:any){
    this.aplicarCheck(link);
    this.settings.aplicarTema(estilo);
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

  colocarCheck(){
    let selectores:any = document.getElementsByClassName('selector');
    for(let ref of selectores){
      let palabra = this.settings.ajustes.tema + "-theme";
      if(ref.classList[1]==palabra){
        ref.classList.add('working');
        break;
      }
    }
  }
}
