export default function convertIssuerAYearToText(issueAYear: string): string {
  switch (issueAYear) {
    case "1":
      return "annual";
    case "2":
      return "biannual";
    case "3":
      return "triannual";
    case "4":
      return "quarterly";
    case "6":
      return "bimonthly";
    case "12":
      return "monthly";
    case "55":
      return "weekly";
    case "-":
      return "irregular";
    default:
      return `${issueAYear} issues/year`;
  }
}
