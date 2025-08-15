import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Spine",
  description: "Spine web application.",
  keywords: ["spine", "web app", "nextjs", "react"],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Spine",
    description: "Spine web application.",
    url: "https://spine.com",
    siteName: "Spine",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "Spine Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spine",
    description: "Spine web application.",
    images: ["/globe.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
