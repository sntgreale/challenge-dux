import React from "react";

import { Button } from "primereact/button";

import { UserTablePaginatorProps } from "./UserTablePaginator.types";

const UserTablePaginator: React.FC<UserTablePaginatorProps> = ({
  currentPage,
  onPageChange,
  hasMoreUsers,
}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 10,
        marginTop: 15,
      }}
      className="w-full"
    >
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        size="small"
      >
        Anterior
      </Button>
      <span className="text-md">Página {currentPage}</span>
      <Button
        size="small"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMoreUsers}
      >
        Siguiente
      </Button>
    </div>
  );
};

export default UserTablePaginator;
