import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/global/Navbar";
import { Providers } from "./providers";
import "react-tooltip/dist/react-tooltip.css";
import Footer from "@/components/global/Footer";
import { Profile } from "@/contents/profile";

const inter = Inter({ subsets: ["latin"] });

const options = {
    title: `${Profile.fullname} | ${Profile.headline}`,
    url: "https://mrid.dev",
    description: `${Profile.fullname} is a Software Engineer who is passionate in Software Engineering and Programming`,
};

export const metadata: Metadata = {
    title: options.title,
    metadataBase: new URL(options.url),
    description: options.description,
    openGraph: {
        title: options.title,
        url: options.url,
        siteName: "mrid.dev",
        locale: "id-ID",
        type: "website",
        description: options.description,
        // TODO: Define og image
        // images: options.ogImage,
    },
    alternates: {
        canonical: options.url,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className + " dark:bg-zinc-900"}>
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
