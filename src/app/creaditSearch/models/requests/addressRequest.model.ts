export interface AddressRequestBody {
  address1: string;
  address2: string;
  postcode: string;
}

export interface AddressRes extends AddressRequestBody {
  id: string;
}
