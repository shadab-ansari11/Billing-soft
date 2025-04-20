export interface IResponse {
  data: any;
  statusCode: number;
  message: string;
}

export interface IDropdown {
  id: number | string;
  value: string;
}

export interface ISelectOptions {
  value: string | number;
  label: string;
}
