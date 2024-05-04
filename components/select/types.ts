import { ReactElement } from "react";

export interface IOption {
  text: string;
  value: string;
  icon: ReactElement;
}

export interface ISMSelect {
  text: string;
  onClick?: (option: IOption) => void;
  options?: IOption[];
  disabled?: boolean;
}