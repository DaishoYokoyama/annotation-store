export const pageNames = {
  HelloWorld: "HelloWorld",
} as const;

export type PageName = typeof pageNames[keyof typeof pageNames];
