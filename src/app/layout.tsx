import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import StoreProvider from "./StoreProvider";
import Footer from "@/components/footer";
import TanStackProviders from "./tanstackProvider";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "@/components/theme-provider";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Laptop_TC | Chuyên cung cấp những sản phẩm laptop gaming , văn phòng",
  description:
    "Laptop_TC | Chuyên cung cấp những sản phẩm laptop gaming , văn phòng",
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
            <Header />
            {children}
            <Footer />
          </StoreProvider>
        </TanStackProviders>

        <Toaster />
      </body>
    </html>
  );
}
