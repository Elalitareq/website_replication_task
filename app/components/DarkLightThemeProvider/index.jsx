"use client";
import { ThemeProvider } from "next-themes";

import React from "react";
import ThemeProviderChild from "./themeProviderChild";

const DarkLightThemeProvider = ({ children }) => {
  return (
    <ThemeProvider defaultTheme="light" attribute="class">
      <ThemeProviderChild>{children}</ThemeProviderChild>
    </ThemeProvider>
  );
};

export default DarkLightThemeProvider;
