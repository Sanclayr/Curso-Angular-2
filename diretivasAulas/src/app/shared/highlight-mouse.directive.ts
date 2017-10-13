import { Directive, HostListener, HostBinding, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    /*this._renderer.setStyle(this._elementRef.nativeElement,'background-color','yellow');*/
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onMouseLeave(){
    /*this._renderer.setStyle(this._elementRef.nativeElement,'background-color','white');*/
    this.backgroundColor = 'white';
  }

  private backgroundColor: string;

  //@HostBinding('style.backgroundColor') backgroundColor: string;

  @HostBinding('style.backgroundColor') get setColor(){
    //código extra;
    return this.backgroundColor;
  }

  constructor(/*private _elementRef: ElementRef,
  private _renderer: Renderer2*/) { }

}
