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
import { useWindowScrollPositions } from "@/hooks/useWindowScrollPosition";
import { PiShoppingBagOpenFill } from "react-icons/pi";
import { HiBeaker, HiBookmark, HiHome } from "react-icons/hi";

const data: {
    title: string;
    href: string;
    underConstruction: boolean;
    icon: React.ReactNode;
}[] = [
    {
        title: "Home",
        href: ROUTE.HOME,
        underConstruction: false,
        icon: <HiHome />,
    },
    {
        title: "Post",
        href: ROUTE.POST,
        underConstruction: false,

        icon: <HiBookmark />,
    },
    {
        title: "Project",
        href: ROUTE.PROJECT,
        underConstruction: true,
        icon: <HiBeaker />,
    },
    {
        title: "Experience",
        href: ROUTE.EXPERIENCE,
        underConstruction: true,
        icon: <PiShoppingBagOpenFill />,
    },
];

export default function Navbar() {
    const isMounted = useMounted();
    const pathname = usePathname();
    const { scrollY } = useWindowScrollPositions();

    const menuItems = (
        href: string,
        title: string,
        underConstruction: boolean,
        index: number,
        icon: React.ReactNode
    ) => (
        <li
            key={index}
            className={`border-b-2 py-6 px-4 ${
                pathname === href ? "border-emerald-500" : "border-transparent"
            }`}
        >
            {underConstruction ? (
                <>
                    <a
                        className="relative"
                        data-tooltip-id="tooltip-under-contruction"
                    >
                        <div className="flex items-center gap-x-2">
                            <div className="text-slate-300">{icon}</div>
                            <span className="text-gray-400">{title}</span>
                        </div>
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
                <Link href={href}>
                    <div className="flex items-center gap-x-2">
                        <div
                            className={
                                pathname === href
                                    ? "text-emerald-500"
                                    : "text-slate-400"
                            }
                        >
                            {icon}
                        </div>
                        <span>{title}</span>
                    </div>
                </Link>
            )}
        </li>
    );

    return (
        <header
            className={`transition-all ease-in-out md:py-0 py-6 border-b border-zinc-300 px-6 dark:border-zinc-700 md:px-20 sticky ${
                scrollY > 100
                    ? "top-0 z-10 dark:bg-[#18181bee] bg-[#fffffff6]"
                    : scrollY !== 0
                    ? "-top-44"
                    : "top-0"
            }`}
        >
            <div className="flex justify-between items-center max-w-6xl mx-auto">
                <LogoNavbar />

                <div className="flex items-center gap-x-8">
                    <div className="flex items-center gap-x-2">
                        <nav className="md:block hidden">
                            <ul className="flex items-center">
                                {data.map(
                                    (
                                        {
                                            href,
                                            title,
                                            underConstruction,
                                            icon,
                                        },
                                        index
                                    ) =>
                                        menuItems(
                                            href,
                                            title,
                                            underConstruction,
                                            index,
                                            icon
                                        )
                                )}
                            </ul>
                        </nav>
                    </div>
                    <ButtonTheme />
                    <MobileMenu />
                </div>
            </div>
        </header>
    );
}
