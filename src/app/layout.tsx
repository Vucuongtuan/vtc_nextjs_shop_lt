import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import { getServerSession } from "next-auth";

import StoreProvider from "./StoreProvider";
import { Suspense } from "react";
import TanStackProviders from "./tanStackProvider";
import GlobalLoading from "@/components/loadingPage";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Cart from "@/components/cart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "VTC Laptop - Chuyên bán những sản phầm laptop - bàn phím - chuột giá tốt ",
  description:
    "VTC Laptop - Laptop và Gaming Chuyên Nghiệp- Website : www.vtclaptop.com- Hotline : 181213202",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanStackProviders>
          <StoreProvider>
            <Suspense fallback={<GlobalLoading />}>
              <Header />
              {children}
              <Footer />
              <Cart />
            </Suspense>
          </StoreProvider>
        </TanStackProviders>
      </body>
    </html>
  );
}
