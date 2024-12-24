import React, { useState, useEffect } from "react";

// Components
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import Input from "@/components/atoms/Input/Input";
import Dropdown from "@/components/atoms/Dropdown/Dropdown";

// Types
import { UserFormProps } from "./UserModal.types";
import { UserStatus } from "@/types/User";

const UserFormModal = ({
  visible,
  onClose,
  onSubmit,
  user = null,
}: UserFormProps) => {
  const [userID, setUserId] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [userStatus, setUserStatus] = useState<UserStatus>("ACTIVO"); // Active by default/
  const [userSector, setUserSector] = useState<number>(4000); // Sector 4000 by default

  const [hasError, setHasError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const availableStates = [
    {
      label: "ACTIVO",
      value: "ACTIVO",
    },
    {
      label: "INACTIVO",
      value: "INACTIVO",
    },
  ];

  const availableSectors = [{ label: "4000", value: 4000 }];

  useEffect(() => {
    if (user) {
      const { id, usuario, estado, sector } = user;
      setUserId(id);
      setUserName(usuario);
      setUserStatus(estado);
      setUserSector(sector);
    } else {
      setUserId("");
      setUserName("");
      setUserStatus("ACTIVO");
      setUserSector(4000);
    }
  }, [user]);

  // Function to manage the registration of user information (creation/update)
  const handleSaveUserData = () => {
    if (!userName) {
      setHasError(true);
      setErrorMessage("El nombre de usuario es requerido");
      return;
    }

    const formData = {
      id: userID,
      usuario: userName,
      estado: userStatus,
      sector: userSector,
    };

    onSubmit(formData);
  };

  return (
    <Dialog
      visible={visible}
      onHide={onClose}
      header={user ? "Editar Usuario" : "Crear Usuario"}
    >
      {/* Form User Data */}
      <div className="p-fluid">
        {/* User ID */}
        {user && <Input label="ID" value={userID} disabled />}

        {/* User Name*/}
        <Input
          label="Usuario"
          value={userName}
          onChange={(e) => {
            setHasError(false);
            setUserName(e.target.value);
          }}
          placeholder="Nombre del usuario"
          invalid={hasError}
          errorMessage={errorMessage}
          className="mb-0"
        />

        {/* User Status */}
        <Dropdown
          label="Estado"
          value={userStatus}
          options={availableStates}
          onChange={(e) => setUserStatus(e.value)}
          placeholder="Seleccionar estado"
        />

        {/* User Sector */}
        <Dropdown
          label="Sector"
          value={userSector}
          options={availableSectors}
          onChange={(e) => setUserSector(e.value)}
          placeholder="Seleccionar sector"
        />
      </div>

      {/* Buttons action (cancel / save)*/}

      <div
        className="w-full flex align-items-center justify-content-center"
        style={{ gap: 15 }}
      >
        <Button
          label="Cancelar"
          className="p-button-secondary"
          onClick={onClose}
          icon="pi pi-times"
          outlined
          severity="info"
        />
        <Button
          label="Confirmar"
          className="p-button-primary"
          onClick={handleSaveUserData}
          icon="pi pi-check"
          severity="info"
        />
      </div>
    </Dialog>
  );
};

export default UserFormModal;
