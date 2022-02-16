export const PageNames = {
  Login: "Login",
  HelloWorld: "HelloWorld",
} as const;

export type PageName = typeof PageNames[keyof typeof PageNames];
