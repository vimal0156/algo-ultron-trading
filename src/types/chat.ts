export type Role = "assistant" | "user";

export interface Message {
  role: Role;
  content: string;
  attachment?: string;
}