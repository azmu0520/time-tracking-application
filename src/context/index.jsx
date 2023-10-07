import React from "react";
import { AuthProvider } from "./Auth";
import { TimeProvider } from "./SpentTime";

export default function MainProvider({ children }) {
  return (
    <AuthProvider>
      <TimeProvider>{children}</TimeProvider>
    </AuthProvider>
  );
}
