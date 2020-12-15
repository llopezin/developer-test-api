export default ({ address, postcode }) => {
  if (address.indexOf("Flat") > -1) {
    const addressDivided = address.match(/^(\S+? \S+?) ([\s\S]+?)$/);
    return {
      address1: addressDivided[1],
      address2: addressDivided[2],
      postcode: postcode,
    };
  }
  return { address1: address, address2: "", postcode: postcode };
};
