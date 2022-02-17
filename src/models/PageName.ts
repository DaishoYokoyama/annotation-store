export const PageNames = {
  Login: "Login",
  Dashboard: "Dashboard",
} as const;

export type PageName = typeof PageNames[keyof typeof PageNames];
