import { FC } from "react";

// Components
import { Button } from "primereact/button";

// Types
import { UserTableActionsProps } from "./UserTableAction.types";

const UserTableActions: FC<UserTableActionsProps> = ({
  user,
  onEdit,
  onDelete,
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        justifyContent: "center",
      }}
    >
      <Button
        onClick={() => onEdit(user)}
        label="Editar"
        severity="info"
        outlined
        icon="pi pi-pencil"
        size="small"
        style={{ maxWidth: "100px" }}
      />
      <Button
        onClick={() => onDelete(user.id)}
        label="Eliminar"
        severity="danger"
        outlined
        icon="pi pi-trash"
        size="small"
        style={{ maxWidth: "100px" }}
      />
    </div>
  );
};

export default UserTableActions;
