import axios from "axios";

export const saveProperty = async (formState: object): Promise<any> => {
  return await axios.post("http://localhost:8000/property", {
    // @ts-ignore
    name: formState.propertyName.value,
    // @ts-ignore
    cnpj: formState.cnpj.value,
    // @ts-ignore
    address: formState.address.value,
    // @ts-ignore
    roomAmount: formState.roomAmount.value,
    propertyTypeId: null,
  });
};

export const saveUser = async (formState: object): Promise<any> => {
  return await axios.post("http://localhost:8000/user", {
    // @ts-ignore
    username: formState.userName.value,
    // @ts-ignore
    name: formState.name.value,
    // @ts-ignore
    cpf: formState.cpf.value,
    // @ts-ignore
    address: formState.address.value,
    // @ts-ignore
    email: formState.email.value,
    // @ts-ignore
    phone: formState.phone.value,
    // @ts-ignore
    birthday: formState.birthday.value,
    // @ts-ignore
    password: formState.password.value,
    // @ts-ignore
    position: formState.position.value,
    // @ts-ignore
    propertyId: formState.propertyId.value,
    // @ts-ignore
    isSuperUser: true,
    // @ts-ignore
    blocked: false,
  });
};

export const saveBedroom = async (formState: object): Promise<any> => {
  return await axios.post("http://localhost:8000/user", {
    // @ts-ignore
    number: formState.number.value,
    // @ts-ignore
    type: formState.type.value,
    // @ts-ignore
    bedtype: "Casal",
    // @ts-ignore
    capacity: formState.capacity.value,
    // @ts-ignore
    status: "Disponível",
    // @ts-ignore
    booked: false,
    // @ts-ignore
    propertyId: formState.propertyId.value
  });
};

export const login = async (email: string, password: string): Promise<any> => {
  return await axios.get(
    `http://localhost:8000/login?email=${email}&password=${password}`
  );
};
