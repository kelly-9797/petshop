import type { Metadata } from "next";
import { Be_Vietnam_Pro, Poppins } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";

import Header from "components/Header";
import Social from "components/Social";

import "./globals.css";

const beVietNamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Haru Pet Shop - Cửa hàng thú cưng | harupetshop.vn",
  description:
    "Haru Pet Shop chuyên cung cấp thức ăn, phụ kiện cho chó mèo chất lượng cao. Giao hàng toàn quốc, giá tốt, tư vấn tận tâm. Ghé thăm harupetshop.vn ngay!",
  openGraph: {
    title: "Haru Pet Shop - Cửa hàng thú cưng",
    description:
      "Chuyên bán đồ ăn và phụ kiện cho chó mèo. Sản phẩm chất lượng, giá tốt, giao hàng nhanh.",
    url: "https://harupetshop.vn",
    type: "website",
    images: [
      {
        url: "https://harupetshop.vn/og.jpeg",
        alt: "Haru Pet Shop - Thế giới cho thú cưng",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haru Pet Shop - Cửa hàng thú cưng",
    description: "Phụ kiện và thức ăn cho chó mèo giao hàng tận nơi.",
    images: ["https://harupetshop.vn/og.jpeg"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${beVietNamPro.className} ${poppins.variable} antialiased bg-bg text-black`}
      >
        <Header />
        <main className="container mx-auto min-h-[calc(100vh-97px)] p-3 lg:p-4 relative">
          {children}
        </main>
        <Social />
        <Toaster />
      </body>
    </html>
  );
}
