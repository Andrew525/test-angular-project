import { CreditCardDirective } from './credit-card.directive';
import { ElementRef } from '@angular/core';
import { element } from 'protractor';

describe('CreditCardDirective', () => {
  it('should create an instance', () => {
    const ele: ElementRef = null;
    const directive = new CreditCardDirective(ele);
    expect(directive).toBeTruthy();
  });
});
