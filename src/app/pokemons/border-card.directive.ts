import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector:'[pkmonBorderCard]'
})

export class BorderCardDirective {

  @Input('pkmonBorderCard')
  color:string;

  constructor(private ref: ElementRef) {
    this.setBorder('#fff');
    this.setHeight(180);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder('#'+Math.floor(Math.random()*16777215).toString(16));
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#ffffff');
  }

  private setBorder(color:string) {
    this.ref.nativeElement.style.border = 'solid 4px ' + color;
  }

  private setHeight(height:number): void {
    this.ref.nativeElement.style.height = height + 'px';
  }
}
