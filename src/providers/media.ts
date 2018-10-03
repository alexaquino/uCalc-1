import { Injectable } from '@angular/core';

@Injectable()
export class Media {

  public resultado = 0;

  constructor() {}

  setResultado(resultado) {
    this.resultado = resultado;
  }

}
