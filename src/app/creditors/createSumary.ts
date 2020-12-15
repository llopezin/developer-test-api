export default (creditors) => {
  const unsecuredQualifyingValue = 500000;
  const unsecuredQualifyingCreditors = 2;

  const totalCreditorValue = sumValues(creditors);

  const securedCreditors = creditors.filter((creditor) => creditor.secured);
  const securedCreditorValue = sumValues(securedCreditors);

  const unsecuredCreditors = creditors.filter((creditor) => !creditor.secured);
  const unsecuredCreditorValue = sumValues(unsecuredCreditors);

  const qualifies =
    unsecuredCreditorValue >= unsecuredQualifyingValue &&
    unsecuredCreditors.length >= unsecuredQualifyingCreditors;

  return {
    totalCreditorValue,
    securedCreditorValue,
    unsecuredCreditorValue,
    qualifies,
  };
};

function sumValues(creditors) {
  return creditors.reduce(function (a, creditor) {
    return a + creditor.value;
  }, 0);
}
