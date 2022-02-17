export const ToastTypes = {
  Error: "error",
  Success: "success",
} as const;

export type ToastType = typeof ToastTypes[keyof typeof ToastTypes];

export type Toast = {
  id: number;
  type: ToastType;
  message: string;
};
