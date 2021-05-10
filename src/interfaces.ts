export interface ReduxState {
  signUpForm: FormStateSignUpInterface;
  step?: number | any
}

export interface ReduxAction {
  type: string;
  value: object | unknown | any | number;
}

export interface PropertyInterface {
  propertyName: { defaultValue: string | null; value: string | null };
  cnpj: { defaultValue: string | null; value: string | null };
  address: { defaultValue: string | null; value: string | null };
  roomAmount: { defaultValue: number | null; value: number | null };
}

export interface UserInterface {
  name: { defaultValue: string | null; value: string | null };
  cpf: { defaultValue: string | null; value: string | null };
  address: { defaultValue: string | null; value: string | null };
  email: { defaultValue: string | null; value: string | null };
  phone: { defaultValue: string | null; value: string | null };
  birthday: { defaultValue: number | null; value: number | null };
  userName: { defaultValue: string | null; value: string | null };
  password: { defaultValue: string | null; value: string | null };
  position: { defaultValue: string | null; value: string | null };
  propertyId: { defaultValue: string | null; value: string | null };
}

export interface FormStateSignUpInterface {
  propertyForm: PropertyInterface
  userForm: UserInterface;
 
}




