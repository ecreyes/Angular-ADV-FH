import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html'
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('txtProgress') txtProgress:ElementRef;

  @Input() leyenda:string = "Leyenda";
  @Input() porcentaje:number = 20;

  @Output() cambioValor: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  aumentar(){
    if(this.porcentaje<100){
      this.porcentaje = this.porcentaje + 5;
      this.cambioValor.emit(this.porcentaje);
    }
    this.txtProgress.nativeElement.focus();
  }

  disminuir(){
    if(this.porcentaje>100){
      this.porcentaje = 100;
    }
    if(this.porcentaje>0){
      this.porcentaje = this.porcentaje - 5;
      this.cambioValor.emit(this.porcentaje);
    }
    this.txtProgress.nativeElement.focus();
  }

  onChanges(valor){
    if(Number(valor)<=100 && Number(valor)>=0){
      this.porcentaje = Number(valor);
      this.cambioValor.emit(this.porcentaje);
      this.txtProgress.nativeElement.value = this.porcentaje;
    }else{
      if(Number(valor)>100){
        this.porcentaje = 100;
        this.txtProgress.nativeElement.value = 100;
        this.cambioValor.emit(this.porcentaje);
      }else{
        this.porcentaje = 0;
        this.txtProgress.nativeElement.value = 0;
        this.cambioValor.emit(this.porcentaje);
      }
    }
    console.log(this.txtProgress.nativeElement.value);
  }


}
