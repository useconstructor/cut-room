import type { Metadata } from "next";
import { Oswald, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const oswald = Oswald({
  subsets: ["latin"],
  variable: "--font-oswald",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  weight: ["300", "400", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cut Room | Premium Barbershop",
  description:
    "Where sharp men get sharper. Expert cuts, fades, hot towel shaves, and grooming services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${sourceSans.variable} scroll-smooth`}
    >
      <body className="bg-[#1A1A1A] text-[#F5F5F5] antialiased">
        {children}
      </body>
    </html>
  );
}
