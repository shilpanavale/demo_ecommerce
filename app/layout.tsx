import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Luma Commerce | Premium ecommerce growth platform",
  description:
    "A modern ecommerce landing page with responsive sections, pricing, testimonials, and a conversion-focused CTA.",
  metadataBase: new URL("https://demo-ecommerce.example"),
  openGraph: {
    title: "Luma Commerce",
    description:
      "Launch premium storefronts with fast checkout, insights, and retention automations.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fffaf0",
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
