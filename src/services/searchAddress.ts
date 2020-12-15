import { ENDPOINTS } from "../shared/endpoints";
import makePostRequest from "../shared/postRequestMethod";

export default async (body): Promise<any> => {
  const address = await makePostRequest(ENDPOINTS.ADDRESSES, body);

  return address;
};
