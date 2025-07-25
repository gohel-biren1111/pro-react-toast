// src/hooks/useToast.ts
import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";
import { ToastOptions, UseToastReturn } from "../types";

export const useToast = (): UseToastReturn => {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const { addToast, clearAll } = context;

  const createToastMethod =
    (type: "success" | "error" | "warning" | "info" | "custom") =>
    (message: string, options: ToastOptions = {}) => {
      addToast({
        type,
        message,
        options,
      });
    };

  return {
    toast: {
      success: createToastMethod("success"),
      error: createToastMethod("error"),
      warning: createToastMethod("warning"),
      info: createToastMethod("info"),
      custom: createToastMethod("custom"),
    },
    clearAll,
  };
};
