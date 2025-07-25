// demo/pages/index.tsx
import React from "react";
import Head from "next/head";
import { ToastProvider, ToastContainer } from "pro-react-toast";
import Demo from "../components/Demo";

const HomePage: React.FC = () => {
  return (
    <>
      <Head>
        <title>Pro React Toast - Professional Toast Notifications</title>
        <meta
          name="description"
          content="Professional React toast notification library with TypeScript, themes, and animations"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ToastProvider maxToasts={8}>
        <Demo />
        <ToastContainer maxToasts={5} position="top-right" theme="light" />
      </ToastProvider>
    </>
  );
};

export default HomePage;
