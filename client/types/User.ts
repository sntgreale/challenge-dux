export type UserStatus = "ACTIVO" | "INACTIVO" | string;

export interface User {
  id: string;
  usuario: string;
  estado: UserStatus;
  sector: number;
}
