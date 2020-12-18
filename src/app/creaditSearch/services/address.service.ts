import { ENDPOINTS } from "../utils/endpoints";
import makePostRequest from "../../../shared/postRequestMethod";
import {
  AddressRequestBody,
  AddressRes,
} from "../models/requests/addressRequest.model";

export default class AdressService {
  async getAddress(body: AddressRequestBody): Promise<AddressRes> {
    const address = await makePostRequest(ENDPOINTS.ADDRESSES, body);

    return address;
  }
}
