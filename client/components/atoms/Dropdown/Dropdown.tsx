import { FC } from "react";

// Components
import { Dropdown as PrimeDropdown } from "primereact/dropdown";

// Types
import { DropdownProps } from "./Dropdown.types";

const Dropdown: FC<DropdownProps> = ({ ...props }) => (
  <div className="p-field" style={{ marginBottom: "16px" }}>
    <label htmlFor={props.label}>{props.label}</label>
    <PrimeDropdown {...props} />
  </div>
);

export default Dropdown;
