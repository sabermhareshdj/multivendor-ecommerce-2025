// Next.js
import type { Metadata } from "next";
import { Inter, Barlow } from "next/font/google";

// Global css
import "./globals.css";

// themeprovider
import { ThemeProvider } from "next-themes";

// Clerk Provider
import { ClerkProvider } from '@clerk/nextjs';


// Fonts
const interFont = Inter({ subsets: ["latin"] });

const barlowFont = Barlow({
  subsets: ['latin'],
  weight: ['500', '700'],
  variable: "--font-barlow",
});

// Metadata
export const metadata: Metadata = {
  title: "GoShop",
  description: "Welcome to GoShope, your ultimate destination for seamless on line shopping, and experience the joy of hassle-free online shopping. Start exploring to day!"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>

    <html lang="en">
      <body
        className={`${interFont.className} ${barlowFont.variable}`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
