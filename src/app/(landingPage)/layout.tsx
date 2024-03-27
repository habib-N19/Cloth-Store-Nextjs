import type { Metadata } from "next";
import { Inter } from "next/font/google";
import '@/app/globals.css'
import Navbar from "@/components/Layout/Shared/Navbar/Navbar";
import Footer from "@/components/Layout/Shared/Footer/Footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Clothing Store",
    description: "A heaven of clothing",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={inter.className}>
                <Navbar />
                {children}
                <Footer />
                <Toaster />
            </body>
        </html>
    );
}
