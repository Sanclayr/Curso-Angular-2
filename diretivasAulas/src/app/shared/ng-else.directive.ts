import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
    if (!condition){
      this._ViewContainerRef.createEmbeddedView(this._templateRef);
    }else{
      this._ViewContainerRef.clear();
    }
  }

  constructor(private _templateRef: TemplateRef<any>, private _ViewContainerRef: ViewContainerRef) { }

}
