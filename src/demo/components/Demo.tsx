// demo/components/Demo.tsx
import React, { useState } from "react";
import { useToast, ToastPosition, ToastTheme } from "pro-react-toast";
// import { useToast, ToastPosition, ToastTheme } from "../../../index";
// import { useToast } from "../../../index";
import styles from "../components/Demo.module.scss";

const Demo: React.FC = () => {
  const { toast, clearAll } = useToast();
  const [position, setPosition] = useState<ToastPosition>("top-right");
  const [theme, setTheme] = useState<ToastTheme>("light");
  const [duration, setDuration] = useState(4000);
  const [closable, setClosable] = useState(true);
  const [customMessage, setCustomMessage] = useState("Hello, World! 🎉");

  const positions: ToastPosition[] = [
    "top-left",
    "top-center",
    "top-right",
    "middle-left",
    "middle-center",
    "middle-right",
    "bottom-left",
    "bottom-center",
    "bottom-right",
  ];

  const themes: ToastTheme[] = ["light", "dark", "custom"];

  const showSuccessToast = () => {
    toast.success("Operation completed successfully!", {
      position,
      theme,
      duration,
      closable,
    });
  };

  const showErrorToast = () => {
    toast.error("Something went wrong. Please try again.", {
      position,
      theme,
      duration,
      closable,
    });
  };

  const showWarningToast = () => {
    toast.warning("This action cannot be undone.", {
      position,
      theme,
      duration,
      closable,
    });
  };

  const showInfoToast = () => {
    toast.info("New update available. Click to learn more.", {
      position,
      theme,
      duration,
      closable,
    });
  };

  const showCustomToast = () => {
    toast.custom(customMessage, {
      position,
      theme,
      duration,
      closable,
      icon: <span>🚀</span>,
    });
  };

  const showMultipleToasts = () => {
    const messages = [
      "First toast message",
      "Second toast message",
      "Third toast message",
      "Fourth toast message",
      "Fifth toast message",
    ];

    messages.forEach((message, index) => {
      setTimeout(() => {
        toast.info(`${message} (${index + 1}/5)`, {
          position,
          theme,
          duration: duration + index * 500,
          closable,
        });
      }, index * 200);
    });
  };

  return (
    <div className={styles.demo}>
      <div className={styles.header}>
        <h1>🍞 Pro React Toast</h1>
        <p>Professional toast notifications for React applications</p>
      </div>

      <div className={styles.controls}>
        <div className={styles.controlGroup}>
          <h3>Toast Controls</h3>

          <div className={styles.controlRow}>
            <label>Position:</label>
            <select
              value={position}
              onChange={(e) => setPosition(e.target.value as ToastPosition)}
            >
              {positions.map((pos) => (
                <option key={pos} value={pos}>
                  {pos.replace("-", " ")}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.controlRow}>
            <label>Theme:</label>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value as ToastTheme)}
            >
              {themes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.controlRow}>
            <label>Duration (ms):</label>
            <input
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              min="0"
              step="500"
            />
          </div>

          <div className={styles.controlRow}>
            <label>
              <input
                type="checkbox"
                checked={closable}
                onChange={(e) => setClosable(e.target.checked)}
              />
              Show close button
            </label>
          </div>

          <div className={styles.controlRow}>
            <label>Custom Message:</label>
            <input
              type="text"
              value={customMessage}
              onChange={(e) => setCustomMessage(e.target.value)}
              placeholder="Enter custom message..."
            />
          </div>
        </div>

        <div className={styles.buttonGroup}>
          <h3>Toast Types</h3>

          <button
            className={`${styles.button} ${styles.success}`}
            onClick={showSuccessToast}
          >
            Success Toast
          </button>

          <button
            className={`${styles.button} ${styles.error}`}
            onClick={showErrorToast}
          >
            Error Toast
          </button>

          <button
            className={`${styles.button} ${styles.warning}`}
            onClick={showWarningToast}
          >
            Warning Toast
          </button>

          <button
            className={`${styles.button} ${styles.info}`}
            onClick={showInfoToast}
          >
            Info Toast
          </button>

          <button
            className={`${styles.button} ${styles.custom}`}
            onClick={showCustomToast}
          >
            Custom Toast
          </button>

          <button
            className={`${styles.button} ${styles.multiple}`}
            onClick={showMultipleToasts}
          >
            Multiple Toasts
          </button>

          <button
            className={`${styles.button} ${styles.clear}`}
            onClick={clearAll}
          >
            Clear All
          </button>
        </div>
      </div>

      <div className={styles.features}>
        <h3>✨ Features</h3>
        <div className={styles.featureGrid}>
          <div className={styles.feature}>
            <span>🎨</span>
            <div>
              <h4>Theme Support</h4>
              <p>Light, dark, and custom themes</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span>📍</span>
            <div>
              <h4>9 Positions</h4>
              <p>Place toasts anywhere on screen</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span>🎯</span>
            <div>
              <h4>TypeScript</h4>
              <p>Full type safety and IntelliSense</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span>⚡</span>
            <div>
              <h4>Performance</h4>
              <p>Optimized animations and rendering</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span>🔧</span>
            <div>
              <h4>Customizable</h4>
              <p>Icons, duration, styling and more</p>
            </div>
          </div>
          <div className={styles.feature}>
            <span>📱</span>
            <div>
              <h4>Responsive</h4>
              <p>Works great on all devices</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.codeExample}>
        <h3>📝 Usage Example</h3>
        <pre>
          <code>{`import { ToastProvider, useToast } from 'pro-react-toast';

function App() {
  return (
    <ToastProvider>
      <MyComponent />
    </ToastProvider>
  );
}

function MyComponent() {
  const { toast } = useToast();
  
  const showToast = () => {
    toast.success('Hello World!', {
      position: 'top-right',
      theme: 'dark',
      duration: 4000
    });
  };
  
  return <button onClick={showToast}>Show Toast</button>;
}`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Demo;
