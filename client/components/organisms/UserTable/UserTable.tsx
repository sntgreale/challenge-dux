import React from "react";

// Components
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import UserTableActions from "@/components/molecules/UserTableActions/UserTableAction";

// Types
import { UserTableProps } from "./UserTable.types";
import { User } from "@/types/User";

const UserTable = React.memo(({ users, onEdit, onDelete }: UserTableProps) => {
  return (
    <DataTable size="small" value={users} rows={10} showGridlines>
      <Column
        field="id"
        header="ID"
        sortable
        style={{ minWidth: "100px", width: "auto" }}
      />
      <Column
        field="usuario"
        header="Usuario"
        sortable
        style={{ minWidth: "350px", width: "auto" }}
      />
      <Column
        field="sector"
        header="Sector"
        style={{ minWidth: "100px", width: "auto" }}
      />
      <Column
        field="estado"
        header="Estado"
        sortable
        style={{ minWidth: "100px", width: "auto" }}
      />
      <Column
        header="Acciones"
        body={(rowData: User) => (
          <UserTableActions
            user={rowData}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
        style={{ minWidth: "200px", width: "auto" }}
      />
    </DataTable>
  );
});

UserTable.displayName = "UserTable";

export default UserTable;
