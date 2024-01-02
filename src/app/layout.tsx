import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import "./globals.css";
import MainNavbar from "@/app/ui/MainNavbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home | Marcus Walker",
  description: "todo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Providers>
          <MainNavbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
