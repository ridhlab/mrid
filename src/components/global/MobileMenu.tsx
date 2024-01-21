"use client";
import { ROUTE } from "@/constants/route";
import React from "react";
import { HiBeaker, HiBookmark, HiHome } from "react-icons/hi";
import { RxHamburgerMenu } from "react-icons/rx";

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
        title: "Blog",
        href: ROUTE.BLOG,
        underConstruction: false,
        icon: <HiBookmark />,
    },
    {
        title: "Project",
        href: ROUTE.PROJECT,
        underConstruction: true,
        icon: <HiBeaker />,
    },
];

export default function MobileMenu() {
    const [navShow, setNavShow] = React.useState(false);
    const onToggleNav = () => {
        setNavShow((prev) => {
            if (status) {
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
            className="md:hidden dark:bg-primary-bg bg-secondary-bg border dark:border-zinc-800 border-zinc-200 rounded-md p-2"
        >
            <RxHamburgerMenu className="text-xl" />
        </button>
    );

    const drawer = (
        <div
            className={`md:hidden fixed left-0 top-0 right-0 bottom-0 z-10 transform duration-[600ms] ease-[cubic-bezier(0.7,0,0,1)] dark:bg-zinc-900 bg-white ${
                navShow ? "translate-x-0 rounded-none" : "translate-x-full"
            }`}
        ></div>
    );

    return (
        <>
            {btnToggle}
            {drawer}
        </>
    );
}
