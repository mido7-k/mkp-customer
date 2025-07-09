import { Component } from '@angular/core';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrl: './account-info.component.scss',
  
})
export class AccountInfoComponent {

  
  person = {
    labelValue: 'الاسم الكامل',
    NameValue: 'محمد الدوسري',
    birthLabel: 'تاريخ الميلاد',
    birthValue: '01/02/1990',
    hejriBirthLabel: 'تاريخ الهجري',
    hejriBirthValue: '01/02/1990',
  };

  nationality = {
    nationalityLabel: 'الجنسية',
    nationalityValue: 'سعودي',
    typeLabel: 'الجنس',
    typeValue: 'ذكر',
  };

  identity = {
    idLabel: 'رقم ألهوية',
    idValue: 1106793235,
    idExpiryLabel: 'إنتهاء ألهوية الوطنية ',
    idExpiryValue: '01/02/2028',
  };

  
}
