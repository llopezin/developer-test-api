export default (address, body) => {
  return {
    surname: body.surname,
    addressId: address[0].id,
  };
};
