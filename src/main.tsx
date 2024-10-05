import { QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { queryClient } from "./constants/constants.ts";
import "./index.css";
import Route from "./routes/Route.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={Route} />
    </QueryClientProvider>
  </StrictMode>
);
