// src/components/ToastContainer/ToastContainer.tsx
import React, { useContext } from "react";
import { ToastContext } from "../../context/ToastContext";
import { Toast } from "../Toast/Toast";
import { ToastContainerProps } from "../../types";
import styles from "../ToastContainer/ToastContainer.module.scss";

export const ToastContainer: React.FC<ToastContainerProps> = ({
  maxToasts = 5,
  position = "top-right",
  theme = "light",
  className = "",
}) => {
  const context = useContext(ToastContext);

  if (!context) {
    console.warn("ToastContainer must be used within a ToastProvider");
    return null;
  }

  const { toasts, removeToast }: any = context;

  // Limit the number of toasts shown
  const visibleToasts = toasts.slice(-maxToasts);

  if (visibleToasts.length === 0) {
    return null;
  }

  const positionClass = position.replace("-", "_");

  return (
    <div
      className={`
        ${styles.container} 
        ${styles[positionClass]}
        ${styles[theme]}
        ${className}
      `}
      role="alert"
      aria-live="polite"
      aria-atomic="false"
    >
      {visibleToasts.map((toast: any) => (
        <Toast key={toast.id} toast={toast} onRemove={removeToast} />
      ))}

      {toasts.length > maxToasts && (
        <div className={styles.overflow}>+{toasts.length - maxToasts} more</div>
      )}
    </div>
  );
};
