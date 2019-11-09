import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective  implements OnInit {
  tooltipElement = document.createElement('div');
  visible = false;
  readonly activeClass = 'tooltip--active';

  @Input()
  set tooltip(value) {
    this.tooltipElement.textContent = value;
  }


  hide() {
    this.tooltipElement.classList.remove(this.activeClass);
  }

  show() {
    this.tooltipElement.classList.add(this.activeClass);
  }

  constructor(private element: ElementRef) { }

  ngOnInit(): void {
    this.tooltipElement.className = 'tooltip';
    this.element.nativeElement.appendChild(this.tooltipElement);
    this.element.nativeElement.classList.add('tooltip-container');
  }

}
