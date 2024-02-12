"use client";
import { ROUTE } from "@/constants/route";
import React from "react";
import { HiBeaker, HiBookmark, HiHome, HiOutlineX } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";
import LogoNavbar from "./LogoNavbar";
import Link from "next/link";
import { Tooltip } from "react-tooltip";
import { IoMdConstruct } from "react-icons/io";
import { useMounted } from "@/hooks/useMounted";
import { usePathname } from "next/navigation";
import { PiShoppingBagOpenFill } from "react-icons/pi";

const data: {
    title: string;
    href: string;
    icon: React.ReactNode;
    underConstruction: boolean;
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

export default function MobileMenu() {
    const [navShow, setNavShow] = React.useState(false);
    const isMounted = useMounted();
    const pathname = usePathname();

    const onToggleNav = () => {
        setNavShow((prev) => {
            if (prev) {
                document.body.style.overflow = "auto";
            } else {
                document.body.style.overflow = "hidden";
            }
            return !prev;
        });
    };

    const btnToggle = (
        <button
            aria-label="Toggle Menu"
            onClick={onToggleNav}
            className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2 transition-all hover:text-emerald-600"
        >
            <RxHamburgerMenu className="text-xl" />
        </button>
    );

    const drawer = (
        <div
            className={`md:hidden fixed left-0 top-0 right-0 bottom-0 z-10 transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
                navShow ? "translate-x-0 rounded-none" : "translate-x-full"
            }`}
        >
            <div className="p-6 flex flex-col gap-y-12">
                <div className="flex justify-between items-center">
                    <LogoNavbar />
                    <button
                        aria-label="Toggle Menu"
                        onClick={onToggleNav}
                        className={`md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-full p-2 duration-500 ${
                            !navShow ? "-rotate-[360deg]" : null
                        }`}
                    >
                        <HiOutlineX className="text-xl" />
                    </button>
                </div>
                <ul className="flex flex-col gap-y-6">
                    {data.map(
                        ({ href, icon, title, underConstruction }, index) => (
                            <li
                                key={index}
                                className="border-b border-zinc-300 dark:border-zinc-700"
                            >
                                {underConstruction ? (
                                    <>
                                        <div className="flex justify-start mb-6">
                                            <a
                                                className="relative flex gap-x-2 items-center text-gray-400"
                                                data-tooltip-id="tooltip-under-contruction"
                                            >
                                                <div className="text-slate-300 dark:text-slate-600">
                                                    {icon}
                                                </div>
                                                <div className="relative">
                                                    <span className="text-gray-400 dark:text-gray-600">
                                                        {title}
                                                    </span>
                                                    <div className="absolute -bottom-2 right-0 text-gray-400 dark:text-gray-600">
                                                        <IoMdConstruct />
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        {isMounted ? (
                                            <Tooltip id="tooltip-under-contruction">
                                                Under construction
                                            </Tooltip>
                                        ) : null}
                                    </>
                                ) : (
                                    <Link
                                        href={href}
                                        onClick={onToggleNav}
                                        className={`flex gap-x-2 items-center transition-all mb-6 ${
                                            pathname === href
                                                ? "text-emerald-600"
                                                : ""
                                        }`}
                                    >
                                        {icon} <p>{title}</p>
                                    </Link>
                                )}
                            </li>
                        )
                    )}
                </ul>
            </div>
        </div>
    );

    return (
        <>
            {btnToggle}
            {drawer}
        </>
    );
}
