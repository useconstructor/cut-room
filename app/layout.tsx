import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Cut Room | Premium Barbershop",
  description:
    "Where style meets precision. Expert cuts, fades, hot towel shaves, and grooming services.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} scroll-smooth`}
    >
      <body className="bg-[#1a2744] text-[#ffffff] antialiased">
        {children}
      </body>
    </html>
  );
}
