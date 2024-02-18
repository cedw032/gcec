import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Nav from "../components/Nav";
import { Container } from "@chakra-ui/react";
import { Providers } from "@/components/Providers";

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
        <Providers>
          <Nav />
          <Container>{children}</Container>
        </Providers>
      </body>
    </html>
  );
}
