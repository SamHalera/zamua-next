import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const montserrat = Montserrat({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "Zamua - soul and folk song-writer",
  description:
    "Zamua is an italian and burundian song-writer, singer and guitarist based in Paris. His music is a fusion between pop-folk and soul-jazz.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="min-h-screen relative flex flex-col justify-between w-full">
        <Header />
        <main className=" flex-1 min-h-full">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
