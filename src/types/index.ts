// src/types/index.ts
import { ReactNode } from "react";

export type ToastType = "success" | "error" | "warning" | "info" | "custom";

export type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export type ToastTheme = "light" | "dark" | "custom";

export interface ToastOptions {
  duration?: number;
  position?: ToastPosition;
  theme?: ToastTheme;
  icon?: ReactNode;
  closable?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

export interface Toast {
  id: string;
  type: ToastType;
  message: string;
  options: ToastOptions;
  createdAt: number;
}

export interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id" | "createdAt">) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

export interface ToastContainerProps {
  maxToasts?: number;
  position?: ToastPosition;
  theme?: ToastTheme;
  className?: string;
}

export interface UseToastReturn {
  toast: {
    success: (message: string, options?: ToastOptions) => void;
    error: (message: string, options?: ToastOptions) => void;
    warning: (message: string, options?: ToastOptions) => void;
    info: (message: string, options?: ToastOptions) => void;
    custom: (message: string, options?: ToastOptions) => void;
  };
  clearAll: () => void;
}
