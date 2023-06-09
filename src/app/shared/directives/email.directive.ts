import { Directive, ElementRef, HostListener } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Directive({
  selector: '[email]',
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: EmailDirective,
    multi: true
  }]
})
export class EmailDirective implements ControlValueAccessor {

  onChange: any;
  onTouched: any;

  constructor(private el: ElementRef) { }

  @HostListener('keyup', ['$event'])
  onKeyup($event: any) {
    let valor = $event.target.value;
  
    const emailRegex = /^[a-zA-Z0-9._%+-]+@ufpr\.br$/;
  
    const parts = valor.split('@');
    if (parts.length === 2 && !emailRegex.test(valor)) {
      valor = parts[0] + "@ufpr.br";
    }
  
    $event.target.value = valor;
  
    this.onChange(valor);
  }

  registerOnChange(fn: any): void {
      this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
      this.onTouched = fn;
  }

  writeValue(obj: any): void {
      this.el.nativeElement.value = obj;
  }
}