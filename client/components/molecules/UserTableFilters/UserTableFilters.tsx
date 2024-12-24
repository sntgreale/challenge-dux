import { FC } from "react";

// Components
import { InputText } from "primereact/inputtext";
import { Dropdown } from "primereact/dropdown";

// Types
import { UserTableFiltersProps } from "./UserTableFilters.types";

// Constants
import { availableStates } from "@/constants/user";

const UserTableFilters: FC<UserTableFiltersProps> = ({
  filters,
  onFilterChange,
}) => {
  return (
    <div
      className="flex-wrap w-full mt-2 mb-2"
      style={{
        display: "flex",
        gap: 15,
      }}
    >
      <InputText
        value={filters.id}
        onChange={(e) => onFilterChange("id", e.target.value)}
        placeholder="Buscar por ID"
        style={{ flex: "1 1 45%" }}
      />
      <InputText
        value={filters.usuario}
        onChange={(e) => onFilterChange("usuario", e.target.value)}
        placeholder="Buscar por Usuario"
        style={{ flex: "1 1 45%" }}
      />
      <Dropdown
        value={filters.estado || ""}
        options={availableStates}
        onChange={(e) => onFilterChange("estado", e.value)}
        placeholder="Filtrar por Estado"
        style={{ flex: "1 1 45%" }}
        showClear={filters.estado ? true : false}
      />
    </div>
  );
};

export default UserTableFilters;
