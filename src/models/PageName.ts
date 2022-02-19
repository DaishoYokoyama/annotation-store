export const PageNames = {
  Login: "Login",
  Dashboard: "Dashboard",
  MyDataSet: "MyDataSet",
  MyTasks: "MyTasks",
} as const;

export type PageName = typeof PageNames[keyof typeof PageNames];
