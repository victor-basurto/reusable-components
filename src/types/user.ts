// ================================================
// USER Types
// ================================================
export type UserRoleType = "designer" | "manager" | "developer";
export type UserStatusType = "active" | "away" | "offline";
export interface User {
  id: string;
  name: string;
  role: UserRoleType;
  status: UserStatusType;
}
