import { FC, ReactNode } from "react";

// Components
import { InputText } from "primereact/inputtext";
import { Message } from "primereact/message";

// Types
import { InputProps } from "./Input.types";

const Input: FC<InputProps> = ({ ...props }): ReactNode => (
  <div className="p-field" style={{ marginBottom: "16px" }}>
    <label htmlFor={props.label}>{props.label}</label>
    <InputText {...props} />
    {props.invalid && <Message severity="error" text={props.errorMessage} />}
  </div>
);

export default Input;
