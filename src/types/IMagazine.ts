export default interface Magazine {
  id: string;
  imageCover: any;
  name: string;
  field: string;
  status: string;
  city: string;
  issuesPerYear: number | string;
  issuesNumber: number | string;
  doesHaveAPage: boolean;
  description: string;
}
