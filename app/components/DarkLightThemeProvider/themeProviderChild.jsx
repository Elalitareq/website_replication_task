import { useTheme } from "next-themes";
import { oswald } from "../../font";
import React from "react";

const ThemeProviderChild = ({ children }) => {
  const { theme } = useTheme();
  return (
    <body className={oswald.className} data-theme={theme}>
      {children}
    </body>
  );
};

export default ThemeProviderChild;
