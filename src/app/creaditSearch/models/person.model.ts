import CreditorsRequestBody from "./requests/creditorsRequest.model";
import { AddressRes } from "../models/requests/addressRequest.model";

export default class Person {
  public surname: string;
  public addressId: string;
  public requestBody;

  constructor(addressRes: AddressRes, { surname }: { surname: string }) {
    this.addressId = addressRes[0].id;
    this.surname = surname;
    this.requestBody = this.createRequestBody();
  }

  createRequestBody(): CreditorsRequestBody {
    return {
      surname: this.surname,
      addressId: this.addressId,
    };
  }
}
