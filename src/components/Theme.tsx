import { FC } from "react";
import { ThemeProvider, DefaultTheme } from "styled-components";

const breakpoints = {
  tablet: "768px",
  desktop: "1024px",
};

const theme: DefaultTheme = {
  breakpoints: {
    tablet: `@media (min-width: ${breakpoints.tablet})`,
    desktop: `@media (min-width: ${breakpoints.desktop})`,
  },
};

const Theme: FC = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
