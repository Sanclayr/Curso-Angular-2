import { Injectable } from '@angular/core';

@Injectable()
export class CursosService {

  //http

  constructor() { }
  
  getCursos(){
    return ['Java','Ext JS','Angular','C#'];
  }
}
