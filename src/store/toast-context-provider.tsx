"use client";

import { useCallback, useContext, useState } from "react";
import { ToastContext } from "./toast-context";
import { IconName, Toast, ToastType } from "@/types/ui";
import { Icon } from "@/components/abstract/Icon";
import { Button } from "@/components/ui/Button";

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error("useToast must be used within ToastProvder");
  return context;
}
export default function ToastContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const removeToast = useCallback((id: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);
  const addToast = useCallback(
    (message: string, type: ToastType = "info") => {
      const id = Math.random().toString(36).substring(2, 9);
      setToasts((prev) => [...prev, { id, message, type }]);
      // auto-remove after 4 seconds
      setTimeout(() => removeToast(id), 4000);
    },
    [removeToast],
  );
  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      {/* toast container */}
      <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-2 w-full max-w-sm">
        {toasts.map((toast) => (
          <ToastItem
            key={toast.id}
            toast={toast}
            onClose={() => removeToast(toast.id)}
          />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
// internal ToastItem component
const ToastItem = ({
  toast,
  onClose,
}: {
  toast: Toast;
  onClose: () => void;
}) => {
  const bgStyles: Record<ToastType, string> = {
    success: "bg-green-600 text-white",
    error: "bg-red-600 text-white",
    warning: "bg-yellow-500 text-white",
    info: "bg-primary text-primary-fg", // Uses your Indigo theme
  };
  const icons: Record<ToastType, string> = {
    success: "circle-check",
    error: "circle-x",
    warning: "triangle-alert",
    info: "info",
  };
  return (
    <div
      className={`flex items-center justify-between p-4 rounded-lg shadow-2xl animate-in slide-in-from-right duration-300 ${bgStyles[toast.type || "info"]}`}
      role="alert"
    >
      <div className="flex items-center gap-3">
        <Icon
          name={icons[toast.type || "info"] as IconName}
          className="w-5 h-5"
        />
        <span className="text-sm font-medium">{toast.message}</span>
      </div>
      <Button
        onClick={onClose}
        className="ml-4 hover:opacity-70 transition-opacity"
      >
        <Icon name="close" className="w-4 h-4" />
      </Button>
    </div>
  );
};
