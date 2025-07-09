import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrl: './wallet.component.scss'
})
export class WalletComponent {
checked: boolean = false;

  @Output() walletChange = new EventEmitter<boolean>();

  onWalletChange() {    
    this.walletChange.emit(this.checked);
  }
}
