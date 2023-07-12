import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AppProvider } from "./context";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
const MyQueryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <AppProvider>
    <QueryClientProvider client={MyQueryClient}>
      <App />
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </AppProvider>
);
