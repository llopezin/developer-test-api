import { Response } from "express";
import searchCreditors from "./services/creditors.service";
import Address from "./models/address.model";
import Person from "./models/person.model";
import Summary from "./models/summary.model";
import { AddressRequestBody } from "./models/requests/addressRequest.model";
import CreditSearchRequestBody from "./models/requests/creditSearchRequest.model";
import AdressService from "./services/address.service";
import CreditorsService from "./services/creditors.service";

export async function handleRequest(
  body: CreditSearchRequestBody,
  res: Response
): Promise<void> {
  //Get address data containing ID, needed to get creditors data
  const preparedAddressData: AddressRequestBody = new Address(body).requestBody;
  const adressService: AdressService = new AdressService();
  const addressResponse = await adressService.getAddress(preparedAddressData);

  //Get creditors data
  const creditorsReqBody = new Person(addressResponse, body).requestBody;
  const creditorsService: CreditorsService = new CreditorsService();
  const creditors = await creditorsService.getCreditors(creditorsReqBody);

  //Build summary
  const summary = new Summary(creditors).summary;

  res.send(summary);
}
