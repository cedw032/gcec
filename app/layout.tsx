import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import { ChakraProvider } from "@chakra-ui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eccentric Cyborgs",
  description: "Home page for the Glenfield College Eccentric Cyborgs",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          <Nav />
          {children}
        </ChakraProvider>
      </body>
    </html>
  );
}
