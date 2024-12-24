import { InputTextProps } from "primereact/inputtext";

export interface InputProps extends InputTextProps {
  label: string;
  errorMessage?: string;
}
