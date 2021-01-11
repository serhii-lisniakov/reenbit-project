import {CartInput} from '../../../models/cart-input.model';

export const CartInputs: CartInput[] = [
  {
    label: 'First name',
    type: 'text',
    placeholder: 'First name',
    formControlName: 'firstName'
  },
  {
    label: 'Last name',
    type: 'text',
    placeholder: 'Last name',
    formControlName: 'lastName'
  },
  {
    label: 'Email address',
    type: 'text',
    placeholder: 'Email address',
    formControlName: 'email',
    validationWarning: 'Exp: email@example.com'
  },
  {
    label: 'Phone number',
    type: 'tel',
    placeholder: 'Phone number',
    formControlName: 'phone',
    validationWarning: 'Exp: (+38) 0912345678'
  },
  {
    label: 'Address',
    type: 'text',
    placeholder: 'Address',
    formControlName: 'address'
  },
  {
    label: 'ZIP / Postal code',
    type: 'text',
    placeholder: 'Postal code or ZIP',
    formControlName: 'postal',
    validationWarning: 'Min 5 digits'
  }
];
