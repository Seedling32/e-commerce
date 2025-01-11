import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import '@/assets/styles/globals.css';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "Prostore",
  description: "Modern ecommerce platform built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.className} antialiased`}
      >
        <h1>test</h1>
        {children}
      </body>
    </html>
  );
}
