export interface ReduxState {
  signUpForm: FormStateSignUpInterface;
  guestForm : GuestForm
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

export interface BedroomInterface {
  number: { defaultValue: string | null; value: string | null };
  type: { defaultValue: string | null; value: string | null };
  capacity: { defaultValue: number | null; value: number | null };
  booked: { defaultValue: string | null; value: string | null };
  propertyId: { defaultValue: string | null; value: string | null };
}

export interface ReservationInterface {
  bedroomId: { defaultValue: string | null; value: string | null };
  guestAmount: { defaultValue: number | null; value: number | null };
  startDate: { defaultValue: number | null; value: number | null };
  endDate: { defaultValue: number | null; value: number | null };
  totalValue: { defaultValue: number | null; value: number | null };
  reservationDate: { defaultValue: number | null; value: number | null };
  checkIn: { defaultValue: boolean | null; value: boolean | null };
}

export interface GuestForm {
  reservationForm: ReservationInterface;
  bedroomForm: BedroomInterface;
}

export interface FormStateSignUpInterface {
  propertyForm: PropertyInterface;
  userForm: UserInterface;
}
