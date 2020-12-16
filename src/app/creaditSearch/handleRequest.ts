import searchAddress from "./services/searchAddress";
import { Response } from "express";
import searchCreditors from "./services/searchCreditors";
import Address from "./models/address.model";
import Person from "./models/person.model";
import Summary from "./models/summary.model";
import { AddressRequestBody } from "./models/requests/addressRequest.model";
import CreditSearchRequestBody from "./models/requests/creditSearchRequest.model";

export async function handleRequest(
  body: CreditSearchRequestBody,
  res: Response
): Promise<void> {
  //Get address data containing ID, needed to get creditors data
  const preparedAddressData: AddressRequestBody = new Address(body).requestBody;
  const addressResponse = await searchAddress(preparedAddressData);

  //Get creditors data
  const creditorsReqBody = new Person(addressResponse, body).requestBody;
  const creditors = await searchCreditors(creditorsReqBody);

  //Build summary
  const summary = new Summary(creditors).summary;

  res.send(summary);
}
