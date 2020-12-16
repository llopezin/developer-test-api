import fetch = require("node-fetch");

export default async function makePostRequest(
  url: string,
  body: any
): Promise<any> {
  const headers = {
    "Content-Type": "application/json",
  };

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });

    const apiData = await response.json();
    return apiData;
  } catch (err) {
    console.log("fetch failed", err);
    return err;
  }
}
