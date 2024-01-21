"use client";

import { ROUTE } from "@/constants/route";
import Link from "next/link";
import LogoNavbar from "./LogoNavbar";
import ButtonTheme from "./ButtonTheme";
import MobileMenu from "./MobileMenu";
import { IoMdConstruct } from "react-icons/io";
import { Tooltip } from "react-tooltip";
import { useMounted } from "@/hooks/useMounted";
import { usePathname } from "next/navigation";

const data: {
    title: string;
    href: string;
    underConstruction: boolean;
}[] = [
    {
        title: "Home",
        href: ROUTE.HOME,
        underConstruction: false,
    },
    {
        title: "Blog",
        href: ROUTE.BLOG,
        underConstruction: false,
    },
    {
        title: "Project",
        href: ROUTE.PROJECT,
        underConstruction: true,
    },
];

export default function Navbar() {
    const isMounted = useMounted();
    const pathname = usePathname();

    const menuItems = (
        href: string,
        title: string,
        underConstruction: boolean,
        index: number
    ) => (
        <li key={index}>
            {underConstruction ? (
                <>
                    <a
                        className="relative"
                        data-tooltip-id="tooltip-under-contruction"
                    >
                        <p className="text-gray-400">{title}</p>
                        <div className="absolute -bottom-2 right-0 text-gray-400">
                            <IoMdConstruct />
                        </div>
                    </a>
                    {isMounted ? (
                        <Tooltip id="tooltip-under-contruction">
                            Under construction
                        </Tooltip>
                    ) : null}
                </>
            ) : (
                <Link
                    href={href}
                    className={pathname === href ? "text-emerald-600" : ""}
                >
                    {title}
                </Link>
            )}
        </li>
    );

    return (
        <header className="py-6 border-b border-zinc-300 px-6 dark:border-zinc-700">
            <div className="flex justify-between items-center">
                <LogoNavbar />

                <div className="flex items-center gap-x-12">
                    <nav className="md:block hidden">
                        <ul className="flex items-center gap-x-8">
                            {data.map(
                                ({ href, title, underConstruction }, index) =>
                                    menuItems(
                                        href,
                                        title,
                                        underConstruction,
                                        index
                                    )
                            )}
                        </ul>
                    </nav>
                    <div className="flex items-center gap-x-2">
                        <ButtonTheme />
                        <MobileMenu />
                    </div>
                </div>
            </div>
        </header>
    );
}
