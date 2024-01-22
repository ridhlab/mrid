import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { Providers } from "./providers";
import "react-tooltip/dist/react-tooltip.css";
import Footer from "@/components/global/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " bg-noise dark:bg-zinc-900"}>
                <Providers>
                    <Navbar />
                    <div className="px-6 md:px-20">
                        <div className="max-w-6xl mx-auto">{children}</div>
                    </div>
                    <Footer />
                </Providers>
            </body>
        </html>
    );
}
