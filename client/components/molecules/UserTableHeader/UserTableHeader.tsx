import { Button } from "primereact/button";

const UserTableHeader = ({ onPressCreate }: { onPressCreate: () => void }) => {
  return (
    <div className="flex flex-wrap align-items-center justify-content-between px-2 py-2 w-full">
      <span className="text-2xl text-900 font-bold">Usuarios</span>
      <Button
        icon="pi pi-plus"
        raised
        label="Nuevo Usuario"
        onClick={onPressCreate}
        style={{ flexBasis: "auto", minWidth: "150px" }}
      />
    </div>
  );
};

export default UserTableHeader;
