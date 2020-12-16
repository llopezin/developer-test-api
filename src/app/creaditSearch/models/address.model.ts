import { AddressRequestBody } from "./requests/addressRequest.model";

export default class Address {
  public address: string;
  public postcode: string;
  public requestBody;

  constructor({ address, postcode }: { address: string; postcode: string }) {
    this.address = address;
    this.postcode = postcode;
    this.requestBody = this.createRequestBody();
  }

  createRequestBody(): AddressRequestBody {
    if (this.address.indexOf("Flat") > -1) {
      const addressDivided =
        this.address.match(/^(\S+? \S+?) ([\s\S]+?)$/) || "";
      return {
        address1: addressDivided[1],
        address2: addressDivided[2],
        postcode: this.postcode,
      };
    }
    return { address1: this.address, address2: "", postcode: this.postcode };
  }
}
