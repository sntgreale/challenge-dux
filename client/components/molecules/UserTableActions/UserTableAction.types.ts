import { User } from "@/types/User";

export interface UserTableActionsProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (id: string) => void;
}
