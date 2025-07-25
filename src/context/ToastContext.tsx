// src/context/ToastContext.tsx
import React, { createContext, useCallback, useState, ReactNode } from "react";
import { Toast, ToastContextType } from "../types";

export const ToastContext = createContext<ToastContextType | null>(null);

interface ToastProviderProps {
  children: ReactNode;
  maxToasts?: number;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 10,
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = useCallback(
    (toast: Omit<Toast, "id" | "createdAt">) => {
      const id = `toast-${Date.now()}-${Math.random()
        .toString(36)
        .substr(2, 9)}`;
      const newToast: Toast = {
        ...toast,
        id,
        createdAt: Date.now(),
      };

      setToasts((prev) => {
        const updated = [...prev, newToast];
        // Keep only the most recent toasts if we exceed maxToasts
        return updated.length > maxToasts ? updated.slice(-maxToasts) : updated;
      });
    },
    [maxToasts]
  );

  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const clearAll = useCallback(() => {
    setToasts([]);
  }, []);

  const contextValue: ToastContextType = {
    toasts,
    addToast,
    removeToast,
    clearAll,
  };

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
    </ToastContext.Provider>
  );
};
