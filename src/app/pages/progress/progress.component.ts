import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
  porcentaje:number = 20;

  constructor() { }

  ngOnInit() {
  }

  aumentar(){
    if(this.porcentaje<100){
      this.porcentaje = this.porcentaje + 5;
    }
  }

  disminuir(){
    if(this.porcentaje>0){
      this.porcentaje = this.porcentaje - 5;
    }
  }

}
