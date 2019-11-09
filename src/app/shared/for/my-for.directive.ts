import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMyFor][myForOf]'
})
export class MyForDirective {

  @Input()
  set myForOf(collection) {
    collection.forEach((item, index) => {
      this.view.createEmbeddedView(this.template, {
        $implicit: item,
        index
      });
    });
  }

  constructor(private view: ViewContainerRef, private template: TemplateRef<any>) { }

}
