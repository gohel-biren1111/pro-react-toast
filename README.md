# 💎 Pro React Toast

A professional React toast notification library with TypeScript support, multiple themes, position control, and smooth animations.

[![npm version](https://badge.fury.io/js/pro-react-toast.svg)](https://badge.fury.io/js/pro-react-toast)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/%3C%2F%3E-TypeScript-%230074c1.svg)](http://www.typescriptlang.org/)

## ✨ Features

- 🎨 **Theme Support** - Light, dark, and custom themes
- 📍 **9 Positions** - Place toasts anywhere on screen
- 🎯 **TypeScript** - Full type safety and IntelliSense
- 🔧 **Customizable** - Icons, duration, styling and more
- ⚡ **Performance** - Optimized animations and rendering
- 📱 **Responsive** - Works great on all devices
- 🔒 **Type Safe** - Built with TypeScript from ground up
- 🎪 **Animations** - Smooth enter/exit animations
- 🎛️ **Stack Control** - Limit maximum toasts shown
- ⏱️ **Auto Dismiss** - Configurable auto-close with progress bar
- 🧩 **Easy to Use** – Simple and powerful flexibility

## 🚀 Live Demo

- **Coming Soon...**

<!-- 🚀 **[Live Demo](https://pro-react-toast.vercel.app/)** -->

<!-- 📦 **[View on npm](https://www.npmjs.com/package/pro-react-toast)** -->

## 📦 Installation

```bash
npm install pro-react-toast
# or
yarn add pro-react-toast
# or
pnpm add pro-react-toast
```

## 🚀 Quick Start

### 1. Wrap your app with ToastProvider

```tsx
import { ToastProvider, ToastContainer } from "pro-react-toast";

function App() {
  return (
    <ToastProvider>
      <YourAppContent />
      <ToastContainer />
    </ToastProvider>
  );
}
```

### 2. Use the useToast hook

```tsx
import { useToast } from "pro-react-toast";

function MyComponent() {
  const { toast } = useToast();

  const showSuccessToast = () => {
    toast.success("Wow Operation completed successfully!");
  };

  const showCustomToast = () => {
    toast.custom("Custom message with icon!", {
      icon: <span>🚀</span>,
      position: "bottom-right",
      theme: "dark",
      duration: 5000,
    });
  };

  return (
    <div>
      <button onClick={showSuccessToast}>Success</button>
      <button onClick={showCustomToast}>Custom</button>
    </div>
  );
}
```

## 📖 API Reference

### ToastProvider Props

| Prop        | Type        | Default | Description                                |
| ----------- | ----------- | ------- | ------------------------------------------ |
| `children`  | `ReactNode` | -       | Your app content                           |
| `maxToasts` | `number`    | `10`    | Maximum number of toasts to keep in memory |

### ToastContainer Props

| Prop        | Type            | Default       | Description                              |
| ----------- | --------------- | ------------- | ---------------------------------------- |
| `maxToasts` | `number`        | `5`           | Maximum toasts to display simultaneously |
| `position`  | `ToastPosition` | `'top-right'` | Default position for toasts              |
| `theme`     | `ToastTheme`    | `'light'`     | Default theme for toasts                 |
| `className` | `string`        | `''`          | Custom CSS class                         |

### Toast Options

| Option      | Type            | Default       | Description                                   |
| ----------- | --------------- | ------------- | --------------------------------------------- |
| `duration`  | `number`        | `4000`        | Auto-dismiss time in ms (0 = no auto-dismiss) |
| `position`  | `ToastPosition` | `'top-right'` | Toast position                                |
| `theme`     | `ToastTheme`    | `'light'`     | Toast theme                                   |
| `icon`      | `ReactNode`     | `undefined`   | Custom icon component                         |
| `closable`  | `boolean`       | `true`        | Show close button                             |
| `className` | `string`        | `''`          | Custom CSS class                              |
| `style`     | `CSSProperties` | `{}`          | Inline styles                                 |

### Toast Positions

```typescript
type ToastPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "middle-left"
  | "middle-center"
  | "middle-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";
```

### Toast Themes

```typescript
type ToastTheme = "light" | "dark" | "custom";
```

### useToast Hook

```typescript
const { toast, clearAll } = useToast();

// Toast methods
toast.success(message, options?)
toast.error(message, options?)
toast.warning(message, options?)
toast.info(message, options?)
toast.custom(message, options?)

// Clear all toasts
clearAll()
```

## 🎨 Customization

### Custom Themes

You can customize toast appearance using CSS variables:

```css
:root {
  --toast-bg-success: #10b981;
  --toast-bg-error: #ef4444;
  --toast-bg-warning: #f59e0b;
  --toast-bg-info: #3b82f6;
  --toast-bg-custom: #8b5cf6;
  --toast-text-color: #ffffff;
  --toast-border-radius: 8px;
  --toast-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
}
```

### Custom Icons

```tsx
import { CustomIcon } from "./icons";

toast.success("Success!", {
  icon: <CustomIcon />,
});
```

### Custom Styling

```tsx
toast.info("Styled toast", {
  className: "my-custom-toast",
  style: {
    background: "linear-gradient(45deg, #667eea, #764ba2)",
  },
});
```

## 🌟 Advanced Examples

### Promise-based Toasts

```tsx
const handleAsyncOperation = async () => {
  try {
    toast.info("Processing...", { duration: 0 });
    await someAsyncOperation();
    clearAll();
    toast.success("Wow My Operation completed!");
  } catch (error) {
    clearAll();
    toast.error("Ohhh My Operation failed!");
  }
};
```

### Notification Center

```tsx
function NotificationCenter() {
  const { toast } = useToast();

  const notifications = [
    { type: "success", message: "Profile updated" },
    { type: "info", message: "New message received" },
    { type: "warning", message: "Storage almost full" },
  ];

  const showAll = () => {
    notifications.forEach((notif, index) => {
      setTimeout(() => {
        toast[notif.type](notif.message);
      }, index * 500);
    });
  };

  return <button onClick={showAll}>Show Notifications</button>;
}
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Build the package
npm run build

# Start demo in development
npm run demo:dev

# Build demo for production
npm run demo:build
```

## 📝 TypeScript Support

This package is built with TypeScript and provides full type safety:

```typescript
import { ToastOptions, ToastPosition, ToastTheme } from "pro-react-toast";

const options: ToastOptions = {
  duration: 5000,
  position: "top-left",
  theme: "dark",
  closable: true,
};
```

## 🤝 Contributing

At **pro-react-toast**, we believe in **building with the community**.
Have an idea, improvement, or feature request? We’re all ears!

We welcome feedback, discussions, and collaboration to make the package more powerful and flexible for everyone.
Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

licensed under the MIT

<!-- ## ⭐ Show Your Support

If this package helped you, please consider giving it a ⭐ on [GitHub](https://github.com/yourusername/pro-react-toast)!

## 🐛 Bug Reports

Found a bug? Please create an issue on [GitHub Issues](https://github.com/biren-gohel-1111/pro-react-toast/issues). -->

---

Made with ❤️ by [Biren Gohel](https://github.com/biren-gohel-1111)
