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
