import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Moolchand Mill Pvt Ltd | Paithani Mahotsav",
  description:
    "Responsive ecommerce homepage for festive sarees, new arrivals, and traditional Paithani collections.",
  metadataBase: new URL("https://demo-ecommerce.example"),
  openGraph: {
    title: "Moolchand Mill Pvt Ltd",
    description:
      "Shop festive sarees, Paithani collections, and new arrival drapes.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#050505",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
