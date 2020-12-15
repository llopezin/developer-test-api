import { ENDPOINTS } from "../shared/endpoints";
import makePostRequest from "../shared/postRequestMethod";

export default async (body): Promise<any> => {
  const creditors = await makePostRequest(ENDPOINTS.CREDITORS, body);

  return creditors;
};
