import { ENDPOINTS } from "../utils/endpoints";
import makePostRequest from "../../../shared/postRequestMethod";
import CreditSearchRequestBody from "../models/requests/creditSearchRequest.model";
import Creditor from "../models/creditor.model";

export default class CreditorsService {
  async getCreditors(body: CreditSearchRequestBody): Promise<Creditor[]> {
    const creditors = await makePostRequest(ENDPOINTS.CREDITORS, body);

    return creditors;
  }
}
