import searchAddress from "../../services/searchAddress";
import { Response } from "express";
import searchCreditors from "../../services/searchCreditors";
import prepareCreditorsRequest from "../utils/prepareCreditorsRequest";
import prepareAddressRequest from "../utils/prepareAddressRequest";
import createSumary from "./createSumary";

export async function handleRequest(body: any, res: Response): Promise<void> {
  const preparedAddressData = prepareAddressRequest(body);
  const address = await searchAddress(preparedAddressData);

  const creditorsReqBody = prepareCreditorsRequest(address, body);
  const creditors = await searchCreditors(creditorsReqBody);

  const summary = createSumary(creditors);

  res.send(summary);
}
