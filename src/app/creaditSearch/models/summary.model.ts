import Creditor from "./creditor.model";

export default class Summary {
  public totalCreditorValue: number;
  public securedCreditors: Creditor[];
  public securedCreditorValue: number;
  public unsecuredCreditors: Creditor[];
  public unsecuredCreditorValue: number;
  public unsecuredQualifyingValue = 500000;
  public unsecuredQualifyingCreditors = 2;
  public qualifies: boolean;

  public summary;

  constructor(creditors: Creditor[]) {
    this.unsecuredQualifyingValue = 500000;
    this.unsecuredQualifyingCreditors = 2;

    this.totalCreditorValue = this.sumValues(creditors);

    this.securedCreditors = creditors.filter((creditor) => creditor.secured);
    this.securedCreditorValue = this.sumValues(this.securedCreditors);

    this.unsecuredCreditors = creditors.filter((creditor) => !creditor.secured);
    this.unsecuredCreditorValue = this.sumValues(this.unsecuredCreditors);

    this.qualifies =
      this.unsecuredCreditorValue >= this.unsecuredQualifyingValue &&
      this.unsecuredCreditors.length >= this.unsecuredQualifyingCreditors;

    this.summary = {
      totalCreditorValue: this.totalCreditorValue,
      securedCreditorValue: this.securedCreditorValue,
      unsecuredCreditorValue: this.unsecuredCreditorValue,
      qualifies: this.qualifies,
    };
  }

  sumValues(creditors: Creditor[]): number {
    return creditors.reduce(function (a, creditor) {
      return a + creditor.value;
    }, 0);
  }
}
