import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-delivery-method',
  templateUrl: './delivery-method.component.html',
  styleUrl: './delivery-method.component.scss'
})
export class DeliveryMethodComponent {
  company: boolean = false;
  online: boolean = false;
  deliveryMethod: string = '';

  @Output() deliveryMethodChange = new EventEmitter<string>();

  onDeliveryMethodChange() {
    this.deliveryMethodChange.emit(this.deliveryMethod);
  }
}
