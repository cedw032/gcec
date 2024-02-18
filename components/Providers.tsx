// app/providers.tsx
"use client";

import { ChakraProvider, extendTheme } from "@chakra-ui/react";

export function Providers({ children }: { children: React.ReactNode }) {
  const customTheme = extendTheme({
    styles: {
      global: {
        // styles for the `body`
        body: {
          bg: "gray.900", // Set your desired background color here
          color: "white",
        },
        // styles for the `#root` div
        "#root": {
          minHeight: "100vh", // Ensures that the root element takes up at least the full height of the viewport
          display: "flex",
          flexDirection: "column",
        },
      },
    },
  });

  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
}
