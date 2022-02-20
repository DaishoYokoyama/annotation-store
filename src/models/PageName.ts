export const PageNames = {
  Login: "Login",
  Dashboard: "Dashboard",
  MyDatasets: "MyDataset",
  MyTasks: "MyTasks",
} as const;

export type PageName = typeof PageNames[keyof typeof PageNames];
