export type UserStatus = "ACTIVO" | "INACTIVO";

export interface User {
  id: string;
  usuario: string;
  estado: UserStatus;
  sector: number;
}
