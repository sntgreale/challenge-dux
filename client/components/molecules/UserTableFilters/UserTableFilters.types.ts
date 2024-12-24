import { User } from "@/types/User";

export interface UserTableFiltersProps {
  filters: Pick<User, "id" | "usuario" | "estado">;
  onFilterChange: (field: string, value: string) => void;
}
