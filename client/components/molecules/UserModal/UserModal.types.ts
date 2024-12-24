import { User } from "@/types/User";

export interface UserFormProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (u: User) => void;
  user: User | null;
}
