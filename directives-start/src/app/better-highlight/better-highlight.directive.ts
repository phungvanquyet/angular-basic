import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input('appBetterHighlight') defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor: string;
  constructor(private ref: ElementRef, private renderer: Renderer2) { }

  ngOnInit(): void {
    //this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'red');
    this.backgroundColor = 'transparent';
  }

  @HostListener('mouseenter') mouseover(evenData: Event) {
    //this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(evenData: Event) {
    //this.renderer.setStyle(this.ref.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;
  }
}
