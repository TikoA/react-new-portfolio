import React from "react";
import { ThemeProvider, ColorModeProvider, CSSReset } from "@chakra-ui/core";

function TurnOnColorMode({ children }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <ColorModeProvider>{children}</ColorModeProvider>
    </ThemeProvider>
  );
}

export default TurnOnColorMode