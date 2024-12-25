import React, { useState, useEffect } from "react";

// Services
import {
  fetchUser,
  createUser,
  updateUser,
  deleteUser,
} from "@/services/userServices";

// Components
import UserModal from "@/components/molecules/UserModal/UserModal";
import UserTableHeader from "@/components/molecules/UserTableHeader/UserTableHeader";
import UserFilters from "@/components/molecules/UserTableFilters/UserTableFilters";
import UserTablePaginator from "@/components/molecules/UserTablePaginator/UserTablePaginator";

// Types
import { User } from "@/types/User";

// Hooks
import useDebounce from "@/hooks/useDebounce";

const LazyUserTable = React.lazy(
  () => import("@/components/organisms/UserTable/UserTable")
);

const UserManagement = ({
  initialUsers = [],
  initialPage = 1,
}: {
  initialUsers?: User[];
  initialPage?: number;
}) => {
  const [users, setUsers] = useState<User[]>(initialUsers);
  const [currentPage, setCurrentPage] = useState<number>(initialPage);
  const [hasMoreUsers, setHasMoreUsers] = useState<boolean>(true);
  const [filters, setFilters] = useState({
    id: "",
    usuario: "",
    estado: "",
  });
  const [sector] = useState<number>(4000);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const debouncedFilters = useDebounce(filters, 500);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const fetchedUsers = await fetchUser(debouncedFilters, currentPage);
      if (fetchedUsers.length < 10) {
        setHasMoreUsers(false);
      } else {
        setHasMoreUsers(true);
      }
      setUsers(fetchedUsers);
    } catch (error) {
      console.error("Error al obtener usuarios:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!isLoading) {
      fetchUsers();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedFilters, currentPage]);

  const handleCreate = async (user: Omit<User, "id">) => {
    await createUser({ ...user, sector });
    fetchUsers();
    setModalVisible(false);
  };

  const handleEdit = async (user: User) => {
    await updateUser(user);
    fetchUsers();
    setModalVisible(false);
  };

  const handleDelete = async (id: string) => {
    await deleteUser(id);
    fetchUsers();
  };

  const handleFilterChange = (field: string, value: string) => {
    setFilters((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div>
      <UserTableHeader onPressCreate={() => setModalVisible(true)} />
      <UserFilters filters={filters} onFilterChange={handleFilterChange} />

      <React.Suspense fallback={<div>Cargando usuarios...</div>}>
        <LazyUserTable
          users={users}
          onEdit={(user: User) => {
            setSelectedUser(user);
            setModalVisible(true);
          }}
          onDelete={handleDelete}
        />
      </React.Suspense>

      <UserTablePaginator
        currentPage={currentPage}
        onPageChange={(newPage) => {
          setCurrentPage(newPage);
        }}
        hasMoreUsers={hasMoreUsers}
      />

      {modalVisible && (
        <UserModal
          visible={modalVisible}
          user={selectedUser}
          onSubmit={selectedUser ? handleEdit : handleCreate}
          onClose={() => {
            setSelectedUser(null);
            setModalVisible(false);
          }}
        />
      )}
    </div>
  );
};

export default UserManagement;
